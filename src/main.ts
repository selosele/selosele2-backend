import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './utils/swagger/swagger.util';
import * as cookieParser from 'cookie-parser';
import * as csrf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  // JWT 토큰을 통한 인증 방식을 사용한다면, CSRF를 활성화할 필요는 없다.
  // app.use('/', csrf({
  //   cookie: true,
  // }));

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

  setupSwagger(app);

  await app.listen(process.env.PORT);
}
bootstrap();
