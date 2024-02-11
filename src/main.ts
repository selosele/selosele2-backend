import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { setupCors, getLogLevels, setupSwagger, setupValidation, isProd, isDev } from './shared/utils';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    
    // 운영 환경에서 SSL 인증서 적용
    ...(isProd(process.env.NODE_ENV) && {
      httpsOptions: {
        key: fs.readFileSync(process.env.PRIVATE_KEY_PATH),
        cert: fs.readFileSync(process.env.CERT_PATH),
      }
    })
  });

  /** 환경변수 service */
  const env = app.get(ConfigService);

  // 로그 레벨 설정
  app.useLogger(getLogLevels(env.get<string>('NODE_ENV')));

  // API 호출 전역 접두사 설정
  app.setGlobalPrefix('api');

  // cookieParser 사용 설정
  app.use(cookieParser());

  // x-powered-by 헤더 삭제
  app.disable('x-powered-by');

  if (isProd(env.get<string>('NODE_ENV'))) {
    const locOrigins = [
      'https://blog.selosele.com',
      'https://blog-selosele.vercel.app'
    ];
    setupCors(app, locOrigins); // CORS 설정
  }

  if (isDev(env.get<string>('NODE_ENV'))) {
    setupSwagger(app); // Swagger 설정
  }

  // 유효성 검증 설정
  setupValidation(app);

  /** host */
  const host = '0.0.0.0';

  /** port */
  const port = (env.get<number>('PORT') || 3000);

  await app.listen(port, host);

  /** 서버 정보 */
  //const server = await app.getHttpServer();
  //console.log('server >>>', server);
  //console.log('address >>>', server.address());
  //console.log('request >>>', server._events.request);

  if (isDev(env.get<string>('NODE_ENV'))) {
    console.log(`Server running at http://localhost:${port}..`);
  }
}
bootstrap();
