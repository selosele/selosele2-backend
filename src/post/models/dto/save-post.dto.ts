import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional } from "class-validator";
import { FileUploaderRequest } from "src/file-uploader/models/file-uploader.model";
import { SaveTagDto } from "src/tag/models";

/** 포스트 추가/수정 DTO */
export class SavePostDto {

  /** 포스트 ID */
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id?: number;

  /** 포스트 제목 */
  @IsNotEmpty()
  title?: string;

  /** 포스트 내용 */
  @IsNotEmpty()
  cont?: string;

  /** 포스트 대표 이미지 File */
  @IsOptional()
  ogImgFile?: FileUploaderRequest;

  /** 포스트 이미지 */
  @IsOptional()
  ogImg?: string;
  
  /** 포스트 이미지 URL */
  @IsOptional()
  ogImgUrl?: string;

  /** 포스트 이미지 용량 */
  @IsOptional()
  ogImgSize?: number;

  /** 포스트 내용 요약 */
  @IsOptional()
  ogDesc?: string;

  /** 포스트 비공개 여부 */
  @IsNotEmpty()
  secretYn?: string;

  /** 포스트 상단고정 여부 */
  @IsNotEmpty()
  pinYn?: string;

  /** 포스트 상단고정 여부 */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  categoryId?: number;
  
  /** 포스트 태그 목록 (JSON) */
  @Type(() => SaveTagDto)
  @IsOptional()
  saveTagList?: string;

}
