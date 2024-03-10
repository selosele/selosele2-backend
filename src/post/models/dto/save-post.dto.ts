import { Transform, TransformFnParams, Type } from 'class-transformer';
import { IsEmpty, IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { isNotBlank } from '@/shared/utils';
import { SaveTagDto } from '@/tag/models';

/** 포스트 등록/수정 DTO */
export class SavePostDto {

  /** 포스트 ID */
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id?: number;

  /** 포스트 제목 */
  @IsNotEmpty()
  title?: string;

  /** 포스트 수정일시 */
  @IsEmpty()
  modDate?: Date;

  /** 포스트 댓글 개수 */
  @IsEmpty()
  replyCnt?: number;

  /** 포스트 내용 */
  @IsNotEmpty()
  cont?: string;

  /** 포스트 대표 이미지 File */
  @IsOptional()
  ogImgFile?: Express.Multer.File;

  /** 포스트 대표 이미지 */
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => isNotBlank(value) ? value : null)
  ogImg?: string;
  
  /** 포스트 대표 이미지 URL */
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => isNotBlank(value) ? value : null)
  ogImgUrl?: string;

  /** 포스트 대표 이미지 용량 */
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => isNotBlank(value) ? value : null)
  ogImgSize?: number;
  
  /** 포스트 대표 이미지 삭제 여부 */
  @IsOptional()
  delOgImg?: string;

  /** 포스트 내용 요약 */
  @IsOptional()
  ogDesc?: string;

  /** 포스트 비공개 여부 */
  @IsNotEmpty()
  secretYn?: string;

  /** 포스트 상단고정 여부 */
  @IsNotEmpty()
  pinYn?: string;

  /** 포스트 임시저장 여부 */
  @IsNotEmpty()
  tmpYn?: string;

  /** 포스트 카테고리 ID */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  categoryId?: number;
  
  /** 포스트 태그 목록 (JSON) */
  @Type(() => Array<SaveTagDto>)
  @IsOptional()
  saveTagList?: string;

}
