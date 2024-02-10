import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

/** 블로그 환경설정 사용 여부 수정 DTO */
export class UpdateBlogConfigUseYnDto {

  /** 환경설정 ID */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  id?: number;

  /** 환경설정 사용 여부 */
  @IsNotEmpty()
  useYn?: string;

}
