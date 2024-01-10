import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { setupCors, getLogLevels, setupSwagger, setupValidation } from './shared/utils';
import { ConfigService } from '@nestjs/config';
import * as os from 'os';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

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
    setupCors(app, config.get<string>('LOC_ORIGIN')); // Cors 설정
  }

  if ('development' === config.get<string>('NODE_ENV')) {
    setupSwagger(app); // Swagger 설정
  }

  // 유효성 검증 설정
  setupValidation(app);

  /** port */
  const port = (config.get<number>('PORT') || 3000);

  await app.listen(port);

  if ('development' === config.get<string>('NODE_ENV')) {
    console.log(`Server running at http://localhost:${port}..`);
  }
}
bootstrap();
