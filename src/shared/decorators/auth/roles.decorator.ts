import { SetMetadata } from '@nestjs/common';

/** 권한을 검증하는 데코레이터 */
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
