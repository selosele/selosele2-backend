import { IsEmpty, IsOptional } from 'class-validator';

/** 콘텐츠 조회 DTO */
export class GetContentDto {

  /** 콘텐츠 ID */
  @IsOptional()
  id?: number;

  /** 콘텐츠 링크 */
  @IsOptional()
  link?: string;

  /** 로그인 여부 */
  @IsEmpty()
  isLogin?: string;

}
