import { IsNotEmpty, IsOptional } from 'class-validator';

// 방명록 등록 DTO
export class AddGuestbookDto {

  // 방명록 작성자
  @IsNotEmpty()
  author?: string;

  // 방명록 작성자 비밀번호
  @IsNotEmpty()
  authorPw?: string;

  // 방명록 작성자 IP
  @IsOptional()
  ip?: string;

  // 방명록 내용
  @IsNotEmpty()
  cont?: string;

}
