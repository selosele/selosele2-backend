import { UserEntity } from "src/auth/models";

/** Redis에 저장하기 위한 JWT 리프레시 토큰의 키값을 만들어주는 유틸 */
export function createJwtRefreshTokenKey(user: UserEntity): string {
  if (!user) return '';

  return `${user.userSn}_${process.env.JWT_REFRESH_SECRET_REDIS_KEY}`;
}
