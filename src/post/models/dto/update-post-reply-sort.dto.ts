import { IsNotEmpty } from 'class-validator';

/** 포스트 댓글 순서 수정 DTO */
export class UpdatePostReplySortDto {

  /** 포스트 댓글 ID */
  @IsNotEmpty()
  id?: number;

  /** 포스트 댓글 순서 */
  @IsNotEmpty()
  sort?: number;

}
