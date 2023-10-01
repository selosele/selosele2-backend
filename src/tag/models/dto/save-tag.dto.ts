import { Expose, Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

/** 태그 등록/수정 DTO */
export class SaveTagDto {

  /** 태그 ID */
  @Expose()
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id?: number;

  /** 태그 명 */
  @Expose()
  @IsNotEmpty()
  @MaxLength(50)
  nm?: string;

  /** 태그 설명 */
  @IsNotEmpty()
  @MaxLength(100)
  desc?: string;

}
