import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtServiceFactory } from '@/shared/factories';
import { isBlank, isNotEmpty } from '@/shared/utils';

/** 유효한 요청인지 확인하는 데코레이터 */
export const IsAuthenticated = createParamDecorator((data: unknown, context: ExecutionContext): boolean => {
  const req = context.switchToHttp().getRequest();
  const accessToken: string = req.headers?.['authorization']?.split(' ')[1];
  
  if (isBlank(accessToken)) {
    return false;
  }
  
  try {
    const jwtService = JwtServiceFactory.create();
    const decodedToken = jwtService.verify(accessToken, {
      secret: process.env.JWT_ACCESS_SECRET_KEY
    });
    const isExpired = new Date().getTime() > decodedToken.exp * 1000;
    
    return isTokenValid(isExpired, decodedToken)
  } catch (err) {
    return false;
  }
});

/**
 * 유효한 JWT인지 확인한다.
 * 1. JWT 액세스 토큰 만료 여부
 * 2. 관리자 권한 소유 여부
*/
function isTokenValid(isExpired: boolean, token) {
  return !isExpired && isNotEmpty(token.userRole.find(role => role.roleId === 'ROLE_ADMIN'))
}
