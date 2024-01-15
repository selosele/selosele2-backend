import { UserDto } from '@/auth/models';
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { getAuthenticatedUser } from '../utils';

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

    // console.log('req.orginalUrl >>>', req.orginalUrl);
    // console.log('req.path >>>', req.path);
    // console.log('req.href >>>', req.href);
    // console.log('req._raw >>>', req._raw);
    // console.log('req.route.path >>>', req.route.path);

    this.logger.warn({ method, url, path, routePath, ip, statusCode, userSn: user?.userSn });

    // 운영 환경에서만 프로그램 사용 로그를 저장한다.
    if ('production' === this.config.get<string>('NODE_ENV')) {

    }
    return next.handle();
  }
}