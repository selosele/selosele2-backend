import { IsNotEmpty } from 'class-validator';

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
