import { IsNotEmpty } from 'class-validator';

// 포스트 검색 DTO
export class SearchPostDto {

  // 검색 옵션
  @IsNotEmpty()
  t?: string;

  // 검색 키워드
  @IsNotEmpty()
  q?: string;

  // 대소문자 구분 여부
  c?: string;

}
