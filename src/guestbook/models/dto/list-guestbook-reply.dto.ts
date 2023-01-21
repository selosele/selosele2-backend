import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

/** 방명록 댓글 목록 조회 DTO */
export class ListGuestbookReplyDto {

  /** 상위 방명록 ID */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  parentId?: number;

}
