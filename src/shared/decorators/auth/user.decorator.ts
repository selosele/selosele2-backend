import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserDto } from "../../../auth/models";

/**
 * 인증된 사용자 정보를 반환하는 데코레이터
 * 
 * 사용 예시
 *   - @User() user: UserDto
 *   - @User('userSn') userSn: string
 */
export const User = createParamDecorator((data: string, context: ExecutionContext): UserDto => {
  const req = context.switchToHttp().getRequest();
  const user: UserDto = req.user;

  return data ? user?.[data] : user;
});
