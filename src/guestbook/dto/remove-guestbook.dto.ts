import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

// 방명록 삭제 DTO
export class RemoveGuestbookDto {

  // 방명록 ID
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  id?: number;

  // 방명록 작성자 비밀번호
  @IsOptional()
  authorPw?: string;

  // 로그인 여부
  @IsOptional()
  isLogin?: string;

}
