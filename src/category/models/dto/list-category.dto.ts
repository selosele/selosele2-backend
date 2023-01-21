import { IsEmpty } from 'class-validator';

/** 카테고리 목록 조회 DTO */
export class ListCategoryDto {

  /** 로그인 여부 */
  @IsEmpty()
  isLogin?: string;

}
