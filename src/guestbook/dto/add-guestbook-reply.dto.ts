import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

/** 방명록 댓글 등록 DTO */
export class AddGuestbookReplyDto {

  /** 상위 방명록 ID */
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  parentId?: number;

  /** 방명록 댓글 작성자 */
  @IsNotEmpty()
  author?: string;

  /** 방명록 댓글 작성자 비밀번호 */
  @IsNotEmpty()
  authorPw?: string;

  /** 방명록 댓글 작성자 IP */
  @IsOptional()
  ip?: string;

  /** 방명록 댓글 내용 */
  @IsNotEmpty()
  cont?: string;

}
