import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserEntity } from 'src/auth/user.entity';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),  // method-scoped
      context.getClass(),    // controller-scoped
    ]);
    if (!roles) {
      return true;
    }
    const req = context.switchToHttp().getRequest();
    const user: UserEntity = req.user;
    if (!user) {
      throw new ForbiddenException('사용자를 찾을 수 없습니다.');
    }

    // roleId 속성 제외 string만 추출
    const userRoles: string[] = user.userRole.map(d => d.roleId);

    return hasRole(roles, userRoles);
  }

}

// 권한을 검증한다.
const hasRole = (roles: string[], userRoles: string[]): boolean => {
  return roles.some((role) => userRoles.includes(role));
};
