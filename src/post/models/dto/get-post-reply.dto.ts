import { IsNotEmpty } from 'class-validator';

/** 포스트 댓글 조회 DTO */
export class GetPostReplyDto {

  /** 포스트 댓글 ID */
  @IsNotEmpty()
  id?: number;

  /** 포스트 댓글 그룹 */
  @IsNotEmpty()
  group?: number;

}
