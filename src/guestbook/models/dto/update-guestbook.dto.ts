import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

/** 방명록 수정 DTO */
export class UpdateGuestbookDto {

  /** 방명록 ID */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  id?: number;

  /** 방명록 작성자 */
  @IsNotEmpty()
  author?: string;

  /** 방명록 작성자 비밀번호 */
  @IsNotEmpty()
  authorPw?: string;

  /** 방명록 내용 */
  @IsNotEmpty()
  cont?: string;

}
