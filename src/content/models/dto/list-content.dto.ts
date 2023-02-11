import { IsOptional } from 'class-validator';

/** 콘텐츠 목록 조회 DTO */
export class ListContentDto {

  /** 임시저장 여부 */
  @IsOptional()
  tmpYn?: string;

}
