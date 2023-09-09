import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

/** 카테고리 등록/수정 DTO */
export class SaveCategoryDto {

  /** 카테고리 ID */
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id?: number;

  /** 카테고리 명 */
  @IsNotEmpty()
  @MaxLength(50)
  nm?: string;

}
