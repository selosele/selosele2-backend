import { UserDto } from '@/auth/models';

/** Redis에 저장하기 위한 JWT 리프레시 토큰의 키값을 생성한다. */
export function createJwtRefreshTokenKey(user: UserDto, jwtRedisKey: string): string {
  if (!user) return '';

  return `${user.userSn}_${jwtRedisKey}`;
}
