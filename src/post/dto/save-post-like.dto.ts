import { IsNotEmpty, IsOptional } from 'class-validator';

/** 포스트 추천 DTO */
export class SavePostLikeDto {

  /** 포스트 추천 ID */
  @IsOptional()
  id?: number;

  /** 포스트 ID */
  @IsNotEmpty()
  postId?: number;

  /** 포스트 추천자 IP */
  @IsNotEmpty()
  ip?: string;

  /** 로그인 여부 */
  @IsOptional()
  isLogin?: string;

}
