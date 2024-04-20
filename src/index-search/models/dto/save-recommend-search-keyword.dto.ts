import { IsNotEmpty } from 'class-validator';

/** 추천 검색어 저장 DTO */
export class SaveRecommendSearchKeywordDto {

  /** 추천 검색어 ID */
  @IsNotEmpty()
  id?: number;

  /** 추천 검색어 */
  @IsNotEmpty()
  keyword?: string;
  
}
