import { IsOptional } from 'class-validator';

/** 포스트 개수 조회 DTO */
export class CountPostDto {

  /** 포스트 상단고정 여부 */
  @IsOptional()
  pinYn?: string;

}
