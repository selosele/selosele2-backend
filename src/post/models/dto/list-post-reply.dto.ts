import { IsOptional } from 'class-validator';

/** 포스트 댓글 목록 조회 DTO */
export class ListPostReplyDto {

  /** 포스트 댓글 삭제 여부 */
  @IsOptional()
  delYn?: string;

  /** 포스트 댓글 관리자 계정 여부 */
  @IsOptional()
  adminYn?: string;

}
