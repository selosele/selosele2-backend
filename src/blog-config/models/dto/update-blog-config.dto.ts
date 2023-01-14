import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { FileUploaderRequest } from 'src/file-uploader/models/file-uploader.model';

/** 블로그 환경설정 수정 DTO */
export class UpdateBlogConfigDto {

  /** 환경설정 ID */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  id?: number;

  /** 블로그 제목 */
  @IsNotEmpty()
  title?: string;

  /** 블로거 닉네임 */
  @IsNotEmpty()
  author?: string;

  /** 블로그 소개 */
  @IsOptional()
  description?: string;

  /** 블로그 아바타 이미지, 대표 이미지 File */
  @IsOptional()
  files?: FileUploaderRequest[];

  /** 블로그 아바타 이미지 */
  @IsOptional()
  hAvatarImg?: string;
  @IsOptional()
  avatarImg?: string;

  /** 블로그 아바타 이미지 용량 */
  @IsOptional()
  hAvatarImgSize?: number;
  @IsOptional()
  avatarImgSize?: number;

  /** 블로그 아바타 이미지 URL */
  @IsOptional()
  hAvatarImgUrl?: string;
  @IsOptional()
  avatarImgUrl?: string;

  /** 블로그 아바타 이미지 삭제 여부 */
  @IsOptional()
  delAvatarImg: string;

  /** 블로그 대표 이미지 */
  @IsOptional()
  hOgImg?: string;
  @IsOptional()
  ogImg?: string;

  /** 블로그 대표 이미지 용량 */
  @IsOptional()
  hOgImgSize?: number;
  @IsOptional()
  ogImgSize?: number;

  /** 블로그 대표 이미지 URL */
  @IsOptional()
  hOgImgUrl?: string;
  @IsOptional()
  ogImgUrl?: string;

  /** 블로그 대표 이미지 삭제 여부 */
  @IsOptional()
  delOgImg: string;

  /** 블로그 대표 이미지 밝기 */
  @IsOptional()
  ogImgContrast?: number;

  /** 블로그 대표 이미지 흐림 */
  @IsOptional()
  ogImgBlur?: number;

  /** 블로그 대표 이미지 가로 위치값 */
  @IsOptional()
  ogImgPosX?: number;

  /** 블로그 대표 이미지 세로 위치값 */
  @IsOptional()
  ogImgPosY?: number;

  /** 메인 포스트 목록 출력 개수 */
  @IsNotEmpty()
  pageSize?: number;

  /** 만족도조사 표출 여부 */
  @IsNotEmpty()
  showSatisYn?: string;

}
