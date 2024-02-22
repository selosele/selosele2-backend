import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { getAuthenticatedUser, isEmpty } from '@/shared/utils';
import { UserDto } from '@/auth/models';
import { JwtServiceFactory } from '@/shared/factories';

/**
 * JWT 액세스 토큰으로부터 인증된 사용자 정보를 반환하는 데코레이터
 * 
 * 사용 예시
 *   - @AccessTokenUser() user: UserDto
 *   - @AccessTokenUser('userSn') userSn: number
 */
export const AccessTokenUser = createParamDecorator((data: string, context: ExecutionContext): UserDto => {
  const req = context.switchToHttp().getRequest();
  const authorization: string = req.headers?.['authorization'];

  if (isEmpty(authorization)) {
    return null;
  }

  const jwtService = JwtServiceFactory.create();
  const accessToken: string = authorization?.split(' ')[1];
  const user = getAuthenticatedUser(accessToken);

  try {
    const decodedToken = jwtService.verify(accessToken, {
      secret: process.env.JWT_ACCESS_SECRET_KEY
    });
    const isExpired = new Date().getTime() > decodedToken.exp * 1000;
    
    if (isExpired) {
      return null;
    }

    return data ? user?.[data] : user;
  } catch (err) {
    return null;
  }
});
