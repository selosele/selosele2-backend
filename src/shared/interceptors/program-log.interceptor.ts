import { UserDto } from '@/auth/models';
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { getAuthenticatedUser, isProd } from '../utils';

@Injectable()
export class ProgramLogInterceptor implements NestInterceptor {

  private readonly logger = new Logger(ProgramLogInterceptor.name);

  constructor(
    private readonly config: ConfigService,
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
    const accessToken: string = req.headers?.['authorization']?.split(' ')[1];
    const user: UserDto = getAuthenticatedUser(accessToken);

    // 운영 환경에서만 프로그램 사용 로그를 저장한다.
    if (isProd(this.config.get<string>('NODE_ENV'))) {
      
      // TODO: 프로그램 상세를 조회해서 로그 출력 시, 프로그램명도 출력해야 함
      this.logger.warn({ method, url, path, routePath, ip, statusCode, userSn: user?.userSn });

      // TODO: 프로그램 사용 로그 저장 로직 구현

    }
    return next.handle();
  }
}