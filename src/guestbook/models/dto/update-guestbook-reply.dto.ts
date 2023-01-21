import { Type } from 'class-transformer';
import { IsEmpty, IsInt, IsNotEmpty } from 'class-validator';

/** 방명록 댓글 수정 DTO */
export class UpdateGuestbookReplyDto {

  /** 방명록 댓글 ID */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  id?: number;

  /** 방명록 댓글 작성자 */
  @IsNotEmpty()
  author?: string;

  /** 방명록 댓글 작성자 비밀번호 */
  @IsNotEmpty()
  authorPw?: string;

  /** 방명록 댓글 내용 */
  @IsNotEmpty()
  cont?: string;

  /** 방명록 댓글 작성자 IP */
  @IsEmpty()
  ip?: string;

}
