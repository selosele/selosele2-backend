import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { JwtAccessGuard, RoleGuard } from '@/shared/guards';

/** 인증·인가 데코레이터 */
export function Auth(...roles: string[]) {
  return applyDecorators(
    UseGuards(JwtAccessGuard, RoleGuard),
    SetMetadata('roles', roles)
  );
}
