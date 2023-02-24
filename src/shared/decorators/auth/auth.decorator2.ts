import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { JwtAccessGuard, RoleGuard } from 'src/shared/guards';

/**
 * 인증·인가 데코레이터
 *   - 리프레시 토큰 guard 미사용 버전
 *   - 로그아웃 API 호출 시, 리프레시 토큰 오류가 발생하면 로그아웃 불가한 현상으로 인해 생성
 * */
export function Auth2(...roles: string[]) {
  return applyDecorators(
    UseGuards(JwtAccessGuard, RoleGuard),
    SetMetadata('roles', roles)
  );
}
