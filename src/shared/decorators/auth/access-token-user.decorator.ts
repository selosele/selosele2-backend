import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "../../../auth/models";

/**
 * JWT access token으로부터 인증된 사용자 정보를 가져오는 데코레이터
 * 
 * 사용 예시
 *   - @User() user: UserEntity
 *   - @User('userSn') userSn: string
 */
export const AccessTokenUser = createParamDecorator((data: string, context: ExecutionContext): UserEntity => {
  const req = context.switchToHttp().getRequest();
  const jwtService: JwtService = new JwtService();
  const user = jwtService.decode(req.headers.authorization.replace('Bearer ', '')) as UserEntity;

  return data ? user?.[data] : user;
});
