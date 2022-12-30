import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { AppModule } from './app.module';
import { setupSwagger } from './shared/utils/swagger/swagger.util';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.disable('x-powered-by');

  app.useGlobalPipes(
    new ValidationPipe({
      // 검증을 통과한 뒤, 대상 객체에서 검증 규칙이 정의되어있지 않은 프로퍼티를 모두 제거해주는 옵션
      whitelist: true,
      // 대상 객체에 검증 규칙이 정의되어 있지 않은 프로퍼티가 있다면 오류를 내게 하는 옵션
      forbidNonWhitelisted: false,
      // auto-transformation을 가능하게 해주는 옵션
      transform: true,
    })
  );

  if ('development' === process.env.NODE_ENV) {
    setupSwagger(app);
  }

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
