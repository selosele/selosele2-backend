import { Type } from 'class-transformer';
import { IsEmpty, IsInt, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

/** 방명록 댓글 추가 DTO */
export class AddGuestbookReplyDto {

  /** 상위 방명록 ID */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  parentId?: number;

  /** 방명록 댓글 작성자 */
  @IsNotEmpty()
  @MaxLength(20)
  author?: string;

  /** 방명록 댓글 작성자 비밀번호 */
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(15)
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
