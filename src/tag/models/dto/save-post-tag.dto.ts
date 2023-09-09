import { Type } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";

/** 포스트 태그 등록/수정 DTO */
export class SavePostTagDto {

  /** 포스트 ID */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  postId?: number;

  /** 태그 ID */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  tagId?: number;

}
