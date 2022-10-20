import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private reflector: Reflector
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const req = context.switchToHttp().getRequest();
    // req.user가 undefined 뜸
    const user = {
      userSn: 1,
      userRole: [
        { roleId: 'ROLE_ADMIN' }
      ]
    };
    if (!user) {
      throw new ForbiddenException('사용자를 찾을 수 없습니다.');
    }

    // roleId 속성을 제외한 string만 추출
    const userRoles: string[] = user.userRole.map(d => d.roleId);

    return hasRole(roles, userRoles);
  }

}

const hasRole = (roles: string[], userRoles: string[]) => {
  return roles.some((role) => userRoles.includes(role));
};
