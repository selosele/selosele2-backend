import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { setupCors, getLogLevels, setupSwagger, setupValidation } from './shared/utils';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: getLogLevels(process.env.NODE_ENV), // 로그 레벨 설정
  });

  // API 호출 전역 접두사 설정
  app.setGlobalPrefix('api');

  // cookieParser 사용 설정
  app.use(cookieParser());

  // x-powered-by 헤더 삭제
  app.disable('x-powered-by');

  if ('production' === process.env.NODE_ENV) {
    setupCors(app); // Cors 설정
  }

  if ('development' === process.env.NODE_ENV) {
    setupSwagger(app); // Swagger 설정
  }

  // 유효성 검증 설정
  setupValidation(app);

  const port = (process.env.PORT || 3000);

  await app.listen(port);

  if ('development' === process.env.NODE_ENV) {
    console.log(`Server running at http://localhost:${port}..`);
  }
}
bootstrap();
