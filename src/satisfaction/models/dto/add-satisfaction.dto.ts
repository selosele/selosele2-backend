import { IsEmpty, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

/** 만족도조사 참여 DTO */
export class AddSatisfactionDto {

  /** 페이지 URL */
  @IsNotEmpty()
  pagePath?: string;

  /** 페이지 타이틀 */
  @IsOptional()
  pageTitle?: string;

  /** 만족도 점수 */
  @IsNotEmpty()
  score?: string;

  /** 만족도 의견 */
  @IsOptional()
  @MaxLength(1000)
  comment?: string;

  /** 만족도 의견 유형 코드 */
  @IsOptional()
  commentTypeCd?: string;
  
  /** 참여자 IP */
  @IsEmpty()
  ip?: string;

}
