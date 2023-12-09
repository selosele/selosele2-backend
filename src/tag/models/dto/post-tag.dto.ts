import { PostDto } from "@/post/models";
import { TagDto } from "./tag.dto";

/** 포스트 태그 DTO */
export class PostTagDto {

  /** 포스트 ID */
  postId?: number;

  /** 태그 ID */
  tagId?: number;

  /** 포스트 */
  post?: PostDto;

  /** 태그 */
  tag?: TagDto;
  
}
