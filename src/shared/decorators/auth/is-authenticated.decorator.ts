import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { isEmpty } from "src/shared/utils";

/** 유효한 요청인지 확인하는 데코레이터 */
export const IsAuthenticated = createParamDecorator((data, context: ExecutionContext): boolean => {
  const req = context.switchToHttp().getRequest();
  const accessToken: string = req.headers?.authorization?.split(' ')[1];
  
  if (isEmpty(accessToken)) {
    return false;
  }
  
  try {
    const decodedToken = new JwtService().verify(accessToken, {
      secret: process.env.JWT_ACCESS_SECRET_KEY
    });
    const isExpired = new Date().getTime() > decodedToken.exp * 1000;
    
    // JWT Access Token 만료 여부에 따른 boolean 값을 리턴한다.
    return !isExpired;
  } catch (err) {
    return false;
  }
});
