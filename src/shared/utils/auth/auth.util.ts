import { UserDto } from "@/auth/models";
import { JwtService } from "@nestjs/jwt";
import { isNotEmpty } from "../common/common.util";

/** 인증된 사용자 정보를 반환한다. */
export function getAuthenticatedUser(token: string): UserDto {
  const jwtService = new JwtService();
  const user = jwtService.decode(token) as UserDto;

  if (isNotEmpty(user)) {
    return user;
  }
  return null;
}
