import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { setupCors, getLogLevels, setupSwagger, setupValidation } from './shared/utils';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const certPath = path.resolve(__dirname, '../../../../etc/letsencrypt/live/blog.selosele.com');
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    httpsOptions: {
      key: fs.readFileSync(path.join(certPath, 'privkey.pem')),
      cert: fs.readFileSync(path.join(certPath, 'fullchain.pem')),
    },
  });

  /** 환경변수 service */
  const config = app.get(ConfigService);

  // 로그 레벨 설정
  app.useLogger(getLogLevels(config.get<string>('NODE_ENV')));

  // API 호출 전역 접두사 설정
  app.setGlobalPrefix('api');

  // cookieParser 사용 설정
  app.use(cookieParser());

  // x-powered-by 헤더 삭제
  app.disable('x-powered-by');

  if ('production' === config.get<string>('NODE_ENV')) {
    setupCors(app, config.get<string>('LOC_ORIGIN')); // CORS 설정
  }

  if ('development' === config.get<string>('NODE_ENV')) {
    setupSwagger(app); // Swagger 설정
  }

  // 유효성 검증 설정
  setupValidation(app);

  /** host */
  const host = '0.0.0.0';

  /** port */
  const port = (config.get<number>('PORT') || 3000);

  await app.listen(port, host);

  /** 서버 정보 */
  //const server = await app.getHttpServer();
  //console.log('server >>>', server);
  //console.log('address >>>', server.address());
  //console.log('request >>>', server._events.request);

  if ('development' === config.get<string>('NODE_ENV')) {
    console.log(`Server running at http://localhost:${port}..`);
  }
}
bootstrap();
