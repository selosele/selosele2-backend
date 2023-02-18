import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { JwtAccessGuard, RoleGuard } from 'src/shared/guards';
import { JwtRefreshGuard } from 'src/shared/guards/auth/jwt-refresh.guard';

/** 인증·인가 데코레이터 */
export function Auth(...roles: string[]) {
  return applyDecorators(
    UseGuards(JwtAccessGuard, JwtRefreshGuard, RoleGuard),
    SetMetadata('roles', roles)
  );
}
