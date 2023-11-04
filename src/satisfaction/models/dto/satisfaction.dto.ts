/** 만족도조사 DTO */
export class SatisfactionDto {

  /** 만족도 ID */
  id?: number;

  /** 페이지 URL */
  pagePath?: string;

  /** 만족도 점수 */
  score?: string;

  /** 만족도 의견 */
  comment?: string;

  /** 만족도 의견 유형 코드 */
  commentTypeCd?: string;

  /** 참여일시 */
  regDate?: Date;
  
}
