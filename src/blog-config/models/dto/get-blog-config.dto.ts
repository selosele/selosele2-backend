import { IsOptional } from 'class-validator';

/** 블로그 환경설정 조회 DTO */
export class GetBlogConfigDto {

  /** 환경설정 ID */
  @IsOptional()
  id?: number;

  /** 환경설정 사용 여부 */
  @IsOptional()
  useYn?: string;

}
