import { IsEmpty } from 'class-validator';

/** 태그 목록 조회 DTO */
export class ListTagDto {

  /** 로그인 여부 */
  @IsEmpty()
  isLogin?: string;

}
