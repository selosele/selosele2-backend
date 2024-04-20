import { IsOptional } from 'class-validator';

/** 검색 색인 로그 등록 DTO */
export class AddIndexSearchLogDto {

  /** 검색 색인 데이터 유형 코드 */
  @IsOptional()
  typeCd?: string;

  /** 자동 색인 여부 */
  @IsOptional()
  autoYn?: string;

  /** 색인 건수 */
  @IsOptional()
  cnt?: number;

  /** 색인 시작일시 */
  @IsOptional()
  startDate?: Date;

  /** 색인 종료일시 */
  @IsOptional()
  endDate?: Date;

}
