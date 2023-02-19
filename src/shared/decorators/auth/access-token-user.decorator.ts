import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { isEmpty } from "src/shared/utils";
import { UserEntity } from "../../../auth/models";

/**
 * JWT access token으로부터 인증된 사용자 정보를 가져오는 데코레이터
 * 
 * 사용 예시
 *   - @AccessTokenUser() user: UserEntity
 *   - @AccessTokenUser('userSn') userSn: string
 */
export const AccessTokenUser = createParamDecorator((data: string, context: ExecutionContext): UserEntity => {
  const req = context.switchToHttp().getRequest();

  if (isEmpty(req.headers['authorization'])) {
    return null;
  }

  const accessToken: string = req.headers['authorization']?.split(' ')[1];
  const user = new JwtService().decode(accessToken) as UserEntity;

  return data ? user?.[data] : user;
});
