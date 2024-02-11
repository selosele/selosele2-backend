import { UserDto } from '@/auth/models';
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { getAuthenticatedUser, isEmpty, isProd } from '../utils';
import { ProgramDetailEntity } from '@/program/models';
import { DataSource } from 'typeorm';

@Injectable()
export class ProgramLogInterceptor implements NestInterceptor {

  private readonly logger = new Logger(ProgramLogInterceptor.name);

  constructor(
    private readonly env: ConfigService,
    private readonly dataSource: DataSource,
  ) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    
    const method = req.method;
    const url = req.url;
    const path = req.path;
    const routePath = req.route.path;
    //const query = req.query;
    //const body = req.body;
    const ip = req.ip;
    const statusCode = req.res.statusCode;
    const programDetailNm = '';
    const message = '';
    const accessToken: string = req.headers?.['authorization']?.split(' ')[1];
    const user: UserDto = getAuthenticatedUser(accessToken);

    // 운영 환경에서만 프로그램 사용 로그를 저장한다.
    if (isProd(this.env.get<string>('NODE_ENV'))) {
      const logData = { method, url, path, routePath, ip, statusCode, programDetailNm, message, userSn: user?.userSn };

      // service, repository 의존성 주입해서 ProgramDetailRepository.findOne() 호출 시
      // ProgramDetailRepository가 undefined로서, 의존성 주입되지 않는 이슈가 있어 아래처럼 처리
      // 의존성 주입 로직으로 해결하려면 app.module.ts의 providers에 ProgramDetailService, ProgramDetailRepository 추가 필요
      const programDetail = await this.dataSource.getRepository(ProgramDetailEntity).findOne({
        where: { method, routePath },
      });

      // 존재하지 않는 프로그램일 경우
      if (isEmpty(programDetail)) {
        logData.message = '존재하지 않는 프로그램 호출 시도';
        this.logger.warn(logData);
        throw new NotFoundException();
      }

      // 미사용 프로그램일 경우
      if ('N' === programDetail.useYn) {
        logData.message = '미사용 프로그램 호출 시도';
        this.logger.warn(logData);
        throw new NotFoundException();
      }

      logData.programDetailNm = programDetail.nm;

      this.logger.warn(logData);

      // TODO: 프로그램 사용 로그 저장 로직 구현

    }
    return next.handle();
  }
}