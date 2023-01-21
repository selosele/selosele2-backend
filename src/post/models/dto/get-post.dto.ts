import { IsEmpty, IsOptional } from 'class-validator';

/** 포스트 조회 DTO */
export class GetPostDto {

  /** 포스트 ID */
  @IsOptional()
  id?: number;

  /** 로그인 여부 */
  @IsEmpty()
  isLogin?: string;

}
