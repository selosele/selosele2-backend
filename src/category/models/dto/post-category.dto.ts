import { PostDto } from "src/post/models";
import { CategoryDto } from "./category.dto";

/** 포스트 카테고리 DTO */
export class PostCategoryDto {

  /** 포스트 ID */
  postId?: number;

  /** 카테고리 ID */
  categoryId?: number;

  /** 포스트 */
  post?: PostDto;

  /** 카테고리 */
  category?: CategoryDto;
  
}