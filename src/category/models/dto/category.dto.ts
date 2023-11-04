import { PostCategoryDto } from "./post-category.dto";

/** 카테고리 DTO */
export class CategoryDto {

  /** 카테고리 ID */
  id?: number;

  /** 카테고리 명 */
  nm?: string;

  /** 카테고리 설명 */
  desc?: string;

  /** 카테고리 등록일시 */
  regDate?: Date;

  /** 카테고리 수정일시 */
  modDate?: Date;

  /** 포스트 카테고리 */
  postCategory?: PostCategoryDto[];
  
}
