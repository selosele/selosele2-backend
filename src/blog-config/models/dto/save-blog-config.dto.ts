import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, Max, MaxLength, Min } from 'class-validator';

/** 블로그 환경설정 추가/수정 DTO */
export class SaveBlogConfigDto {

  /** 환경설정 ID */
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id?: number;

  /** 환경설정 명 */
  @IsOptional()
  @MaxLength(30)
  nm?: string;

  /** 블로그 제목 */
  @IsNotEmpty()
  @MaxLength(100)
  title?: string;

  /** 블로거 닉네임 */
  @IsNotEmpty()
  @MaxLength(30)
  author?: string;

  /** 블로그 소개 */
  @IsOptional()
  @MaxLength(100)
  desc?: string;

  /** 블로그 아바타 이미지, 대표 이미지 File */
  @IsOptional()
  files?: Express.Multer.File[];

  /** 블로그 아바타 이미지 */
  @IsOptional()
  avatarImg?: string;

  /** 블로그 아바타 이미지 용량 */
  @IsOptional()
  avatarImgSize?: number;

  /** 블로그 아바타 이미지 URL */
  @IsOptional()
  avatarImgUrl?: string;

  /** 블로그 아바타 이미지 삭제 여부 */
  @IsOptional()
  delAvatarImg: string;

  /** 블로그 대표 이미지 */
  @IsOptional()
  ogImg?: string;

  /** 블로그 대표 이미지 용량 */
  @IsOptional()
  ogImgSize?: number;

  /** 블로그 대표 이미지 URL */
  @IsOptional()
  ogImgUrl?: string;

  /** 블로그 대표 이미지 삭제 여부 */
  @IsOptional()
  delOgImg: string;

  /** 블로그 대표 이미지 밝기 */
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(1)
  ogImgContrast?: number;

  /** 블로그 대표 이미지 흐림 */
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(9.9)
  ogImgBlur?: number;

  /** 블로그 대표 이미지 가로 위치값 */
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(100)
  ogImgPosX?: number;

  /** 블로그 대표 이미지 세로 위치값 */
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(100)
  ogImgPosY?: number;

  /** 블로그 대표 이미지 채우기 여부 */
  @IsNotEmpty()
  ogImgCoverYn?: string;

  /** 메인 포스트 목록 출력 개수 */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  @Min(2)
  @Max(10)
  pageSize?: number;

  /** 만족도조사 표출 여부 */
  @IsNotEmpty()
  showSatisYn?: string;

  /** 카카오톡 메시지 수신 여부 */
  @IsNotEmpty()
  kakaoMsgYn?: string;

  /** 카카오톡 메시지 수신 여부 */
  @IsOptional()
  useYn?: string;

}
