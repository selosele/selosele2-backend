import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

/** 카테고리 추가/수정 DTO */
export class SaveCategoryDto {

  /** 카테고리 ID */
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id?: number;

  /** 카테고리 명 */
  @IsNotEmpty()
  nm?: string;

}
