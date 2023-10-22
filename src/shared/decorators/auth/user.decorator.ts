import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserEntity } from "../../../auth/models";

/**
 * 인증된 사용자 정보를 반환하는 데코레이터
 * 
 * 사용 예시
 *   - @User() user: UserEntity
 *   - @User('userSn') userSn: string
 */
export const User = createParamDecorator((data: string, context: ExecutionContext): UserEntity => {
  const req = context.switchToHttp().getRequest();
  const user: UserEntity = req.user;

  return data ? user?.[data] : user;
});
