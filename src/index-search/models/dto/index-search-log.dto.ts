/** 검색 색인 로그 DTO */
export class IndexSearchLogDto {

  /** 색인 로그 ID */
  id?: number;

  /** 검색 색인 데이터 유형 코드 */
  typeCd?: string;

  /** 색인 건수 */
  cnt?: number;

  /** 색인 시작일시 */
  startDate?: Date;

  /** 색인 시작일시 */
  endDate?: Date;

  /** 색인 로그 등록일시 */
  regDate?: Date;

}
