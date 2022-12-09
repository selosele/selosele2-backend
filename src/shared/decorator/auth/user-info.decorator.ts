import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserEntity } from "../../../auth/user.entity";

// 인증된 사용자 정보 받아오는 데코레이터
export const UserInfo = createParamDecorator((data, context: ExecutionContext): UserEntity => {
  const req = context.switchToHttp().getRequest();
  return req.user;
});
