import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { JwtAuthGuard, RoleGuard } from 'src/shared/guards';

/** 인증·인가 데코레이터 */
export function Auth(...roles: string[]) {
  return applyDecorators(
    UseGuards(JwtAuthGuard, RoleGuard),
    SetMetadata('roles', roles)
  );
}
