import { IsEmpty, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

/** 방명록 등록 DTO */
export class AddGuestbookDto {

  /** 방명록 작성자 */
  @IsNotEmpty()
  @MaxLength(20)
  author?: string;

  /** 방명록 작성자 비밀번호 */
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(15)
  authorPw?: string;

  /** 방명록 작성자 IP */
  @IsEmpty()
  ip?: string;

  /** 방명록 내용 */
  @IsNotEmpty()
  cont?: string;

  /** 관리자 계정 여부 */
  @IsEmpty()
  adminYn?: string;

}
