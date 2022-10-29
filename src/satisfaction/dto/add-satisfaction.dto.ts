import { IsNotEmpty, IsOptional } from 'class-validator';

// 만족도조사 참여 DTO
export class AddSatisfactiontDto {

  // 페이지 URL
  @IsNotEmpty()
  pagePath?: string;

  // 만족도 점수
  @IsNotEmpty()
  score?: string;

  // 만족도 의견
  @IsOptional()
  comment?: string;
  
  // 참여자 IP
  @IsOptional()
  ip?: string;

}
