import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { isNotEmpty } from "src/shared/util/util";

/** 유효한 요청인지 확인하는 데코레이터 */
export const IsAuthenticated = createParamDecorator((data, context: ExecutionContext): boolean => {
  const req = context.switchToHttp().getRequest();
  return isNotEmpty(req.headers.authorization);
});
