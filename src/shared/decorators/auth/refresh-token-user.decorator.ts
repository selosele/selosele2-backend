import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { isEmpty } from "src/shared/utils";
import { UserDto } from "../../../auth/models";

/**
 * JWT 리프레시 토큰으로부터 인증된 사용자 정보를 반환하는 데코레이터
 * 
 * 사용 예시
 *   - @RefreshTokenUser() user: UserDto
 *   - @RefreshTokenUser('userSn') userSn: string
 */
export const RefreshTokenUser = createParamDecorator((data: string, context: ExecutionContext): UserDto => {
  const req = context.switchToHttp().getRequest();
  const refreshToken: string = req?.cookies?.refreshToken;

  if (isEmpty(refreshToken)) {
    return null;
  }

  const jwtService: JwtService = new JwtService();
  const user = jwtService.decode(refreshToken) as UserDto;

  try {
    const decodedToken = jwtService.verify(refreshToken, {
      secret: process.env.JWT_REFRESH_SECRET_KEY
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
