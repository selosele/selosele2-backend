import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { AppModule } from './app.module';
import { setupCors, setupSwagger, setupValidation } from './shared/utils/utils';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /** x-powered-by 헤더 삭제 */
  app.disable('x-powered-by');

  if ('production' === process.env.NODE_ENV) {
    /** Cors 설정 */
    setupCors(app);
  }

  /** 유효성 검증 설정 */
  setupValidation(app);

  if ('development' === process.env.NODE_ENV) {
    /** Swagger 설정 */
    setupSwagger(app);
  }

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
