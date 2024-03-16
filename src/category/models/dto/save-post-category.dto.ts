import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

/** 포스트 카테고리 등록/수정 DTO */
export class SavePostCategoryDto {

  /** 포스트 ID */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  postId?: number;

  /** 카테고리 ID */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  categoryId?: number;

}
