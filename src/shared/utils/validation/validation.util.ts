import { INestApplication, ValidationPipe } from '@nestjs/common';

/** 유효성 검증 유틸 */
export function setupValidation(app: INestApplication): void {
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
};
