/** 유형별 검색 색인 데이터 개수 조회 응답 DTO */
export class CountIndexSearchStatResponseDto {

  /** 모든글 개수 */
  total?: number;

  /** 공개글 개수 */
  normal?: number;

  /** 비공개글 개수 */
  secret?: number;

  /** 고정글 개수 */
  pin?: number;

}
