import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "../../../auth/user.entity";

export const UserInfo = createParamDecorator((data, context: ExecutionContext): User => {
  const req = context.switchToHttp().getRequest();
  return req.user;
});
