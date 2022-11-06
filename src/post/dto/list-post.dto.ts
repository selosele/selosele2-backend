import { IsOptional } from 'class-validator';

// 포스트 목록 조회 DTO
export class ListPostDto {

  // 로그인 여부
  @IsOptional()
  isLogin?: string;

}
