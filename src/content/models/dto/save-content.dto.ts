import { Transform, TransformFnParams, Type } from 'class-transformer';
import { IsEmpty, IsInt, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';
import { isNotBlank } from '@/shared/utils';
import { Express } from 'express';
import { Multer } from 'multer';

/** 콘텐츠 등록/수정 DTO */
export class SaveContentDto {

  /** 콘텐츠 ID */
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id?: number;

  /** 콘텐츠 제목 */
  @IsNotEmpty()
  title?: string;

  /** 콘텐츠 수정일시 */
  @IsEmpty()
  modDate?: Date;

  /** 콘텐츠 내용 */
  @IsNotEmpty()
  cont?: string;

  /** 콘텐츠 대표 이미지 File */
  @IsOptional()
  ogImgFile?: Express.Multer.File;

  /** 콘텐츠 대표 이미지 */
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => isNotBlank(value) ? value : null)
  ogImg?: string;
  
  /** 콘텐츠 대표 이미지 URL */
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => isNotBlank(value) ? value : null)
  ogImgUrl?: string;

  /** 콘텐츠 대표 이미지 용량 */
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => isNotBlank(value) ? value : null)
  ogImgSize?: number;
  
  /** 콘텐츠 대표 이미지 삭제 여부 */
  @IsOptional()
  delOgImg?: string;

  /** 콘텐츠 내용 요약 */
  @IsOptional()
  ogDesc?: string;

  /** 콘텐츠 링크 */
  @IsOptional()
  @MaxLength(50)
  link?: string;

  /** 콘텐츠 임시저장 여부 */
  @IsNotEmpty()
  tmpYn?: string;

  /** 연결메뉴명 수정 여부 */
  @IsOptional()
  updateMenuNameYn?: string;

  /** CRUD 유형 */
  @IsNotEmpty()
  crudType?: string;

}
