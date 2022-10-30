import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

// 만족도조사 검색 DTO
export class SearchSatisfactiontDto {
  
  // 오늘 날짜 조회 여부
  @IsOptional()
  isToday?: string;

  // 조회 날짜
  @Type(() => String)
  @IsString()
  @IsOptional()
  regDate?: String;

}
