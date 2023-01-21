import { Type } from 'class-transformer';
import { IsEmpty, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

/** 방명록 댓글 추가 DTO */
export class AddGuestbookReplyDto {

  /** 상위 방명록 ID */
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
  @IsEmpty()
  ip?: string;

  /** 방명록 댓글 내용 */
  @IsNotEmpty()
  cont?: string;

  /** 관리자 계정 여부 */
  @IsEmpty()
  adminYn?: string;

}
