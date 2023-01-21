import { IsEmpty, IsNotEmpty } from 'class-validator';

/** 방명록 추가 DTO */
export class AddGuestbookDto {

  /** 방명록 작성자 */
  @IsNotEmpty()
  author?: string;

  /** 방명록 작성자 비밀번호 */
  @IsNotEmpty()
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
