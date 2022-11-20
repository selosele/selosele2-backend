import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserEntity } from "../../../auth/user.entity";

export const UserInfo = createParamDecorator((data, context: ExecutionContext): UserEntity => {
  const req = context.switchToHttp().getRequest();
  return req.user;
});
