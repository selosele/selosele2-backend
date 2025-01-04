import { IsOptional } from 'class-validator';

/** 유형별 포스트 개수 조회 DTO */
export class CountPostStatDto {

  /** 포스트 상단고정 여부 */
  @IsOptional()
  pinYn?: string;

  /** 포스트 비공개 여부 */
  @IsOptional()
  secretYn?: string;

  /** 포스트 임시저장 여부 */
  @IsOptional()
  tmpYn?: string;

}
