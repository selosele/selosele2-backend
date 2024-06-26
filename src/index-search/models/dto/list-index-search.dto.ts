/** 검색 색인 데이터 목록 조회 DTO */
export class ListIndexSearchDto {

  /** 색인 데이터 비공개 여부 */
  secretYn?: string;

  /** 색인 데이터 유형 코드 */
  typeCd?: string;

  /** 범위 값 */
  take?: number;
  
}
