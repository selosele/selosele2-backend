import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { isEmpty } from "src/shared/utils";
import { UserEntity } from "../../../auth/models";

/**
 * JWT refresh token으로부터 인증된 사용자 정보를 가져오는 데코레이터
 * 
 * 사용 예시
 *   - @RefreshTokenUser() user: UserEntity
 *   - @RefreshTokenUser('userSn') userSn: string
 */
export const RefreshTokenUser = createParamDecorator((data: string, context: ExecutionContext): UserEntity => {
  const req = context.switchToHttp().getRequest();

  if (isEmpty(req.cookies['refreshToken'])) {
    return null;
  }

  const jwtService: JwtService = new JwtService();
  const user = jwtService.decode(req.cookies['refreshToken']) as UserEntity;

  return data ? user?.[data] : user;
});
