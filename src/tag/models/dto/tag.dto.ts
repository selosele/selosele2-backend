import { PostTagDto } from "./post-tag.dto";

/** 태그 DTO */
export class TagDto {

  /** 태그 ID */
  id?: number;

  /** 태그 명 */
  nm?: string;

  /** 태그 설명 */
  desc?: string;

  /** 태그 등록일시 */
  regDate?: Date;

  /** 태그 수정일시 */
  modDate?: Date;

  /** 포스트 태그 */
  postTag?: PostTagDto[];
  
}
