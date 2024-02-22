import { UserDto } from '@/auth/models';
import { JwtServiceFactory } from '@/shared/factories';

/** 인증된 사용자 정보를 반환한다. */
export function getAuthenticatedUser(token: string): UserDto {
  const jwtService = JwtServiceFactory.create();
  const user = jwtService.decode(token) as UserDto;

  return user ?? null;
}
