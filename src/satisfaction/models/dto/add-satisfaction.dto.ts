import { IsEmpty, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

/** 만족도조사 참여 DTO */
export class AddSatisfactiontDto {

  /** 페이지 URL */
  @IsNotEmpty()
  pagePath?: string;

  /** 만족도 점수 */
  @IsNotEmpty()
  score?: string;

  /** 만족도 의견 */
  @IsOptional()
  @MaxLength(1000)
  comment?: string;
  
  /** 참여자 IP */
  @IsEmpty()
  ip?: string;

}
