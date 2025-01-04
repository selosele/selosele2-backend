/** 유형별 포스트 개수 조회 응답 DTO */
export class CountPostStatResponseDto {

  /** 모든글 개수 */
  total?: number;

  /** 공개글 개수 */
  normal?: number;

  /** 비공개글 개수 */
  secret?: number;

  /** 고정글 개수 */
  pin?: number;

  /** 임시저장글 개수 */
  tmp?: number;

}
