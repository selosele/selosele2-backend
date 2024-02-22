import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtServiceFactory } from '@/shared/factories';
import { isBlank } from '@/shared/utils';

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
    
    // JWT 액세스 토큰 만료 여부에 따른 boolean 값을 반환한다.
    return !isExpired;
  } catch (err) {
    return false;
  }
});
