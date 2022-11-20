import { IsNotEmpty } from 'class-validator';

// 포스트 추천 정보 조회 DTO
export class GetPostLikeDto {

  // 포스트 ID
  @IsNotEmpty()
  postId?: number;

  // 포스트 추천자 IP
  @IsNotEmpty()
  ip?: string;

}
