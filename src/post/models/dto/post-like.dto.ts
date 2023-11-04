import { PostDto } from "./post.dto";

/** 포스트 추천 DTO */
export class PostLikeDto {

  /** 포스트 추천 ID */
  id?: number;

  /** 포스트 ID */
  postId?: number;

  /** 포스트 추천자 IP */
  ip?: string;

  /** 포스트 추천일시 */
  regDate?: Date;

  /** 포스트 */
  post?: PostDto;
  
}
