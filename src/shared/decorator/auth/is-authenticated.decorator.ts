import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { isNotEmpty } from "src/shared/util/util";

export const isAuthenticated = createParamDecorator((data, context: ExecutionContext): boolean => {
  const req = context.switchToHttp().getRequest();
  return isNotEmpty(req.headers.authorization);
});
