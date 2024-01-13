import { PostTagDto } from "@/tag/models";
import { PostLikeDto } from "./post-like.dto";
import { PostReplyDto } from "./post-reply.dto";
import { PostCategoryDto } from "@/category/models";

/** 포스트 DTO */
export class PostDto {

  /** 포스트 ID */
  id?: number;

  /** 포스트 제목 */
  title?: string;

  /** 포스트 등록일시 */
  regDate?: Date;

  /** 포스트 수정일시 */
  modDate?: Date;

  /** 포스트 댓글 수 */
  replyCnt?: number;
  
  /** 포스트 내용 */
  cont?: string;
  
  /** 포스트 내용의 순수 텍스트 */
  rawText?: string;
  
  /** 포스트 대표 이미지 */
  ogImg?: string;
  
  /** 포스트 대표 이미지 URL */
  ogImgUrl?: string;
  
  /** 포스트 대표 이미지 용량 */
  ogImgSize?: number;
  
  /** 포스트 내용 요약 */
  ogDesc?: string;
  
  /** 포스트 비공개 여부 */
  secretYn?: string;
  
  /** 포스트 상단고정 여부 */
  pinYn?: string;

  /** 포스트 임시저장 여부 */
  tmpYn?: string;

  /** 포스트 카테고리 */
  postCategory?: PostCategoryDto[];

  /** 포스트 태그 */
  postTag?: PostTagDto[];

  /** 포스트 추천 */
  postLike?: PostLikeDto[];

  /** 포스트 댓글 */
  postReply?: PostReplyDto[];

  /** 포스트 추천 수 */
  likeCnt?: number;

  /** 사용자 포스트 추천 */
  userPostLike?: PostLikeDto;

  /** 이전/다음 포스트 목록 */
  prevAndNext?: PostDto[];
  
}
