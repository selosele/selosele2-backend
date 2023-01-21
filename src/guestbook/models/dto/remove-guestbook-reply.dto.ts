import { Type } from 'class-transformer';
import { IsEmpty, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

/** 방명록 댓글 삭제 DTO */
export class RemoveGuestbookReplyDto {

  /** 방명록 댓글 ID */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  id?: number;

  /** 방명록 댓글 작성자 비밀번호 */
  @IsOptional()
  authorPw?: string;

  /** 로그인 여부 */
  @IsEmpty()
  isLogin?: string;

}
