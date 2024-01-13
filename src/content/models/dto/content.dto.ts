/** 콘텐츠 DTO */
export class ContentDto {

  /** 콘텐츠 ID */
  id?: number;

  /** 콘텐츠 링크 */
  link?: string;

  /** 콘텐츠 제목 */
  title?: string;

  /** 콘텐츠 등록일시 */
  regDate?: Date;

  /** 콘텐츠 수정일시 */
  modDate?: Date;

  /** 콘텐츠 내용 */
  cont?: string;

  /** 콘텐츠 내용의 순수 텍스트 */
  rawText?: string;

  /** 콘텐츠 대표 이미지 */
  ogImg?: string;
  
  /** 콘텐츠 대표 이미지 URL */
  ogImgUrl?: string;
  
  /** 콘텐츠 대표 이미지 용량 */
  ogImgSize?: number;

  /** 콘텐츠 내용 요약 */
  ogDesc?: string;

  /** 콘텐츠 임시저장 여부 */
  tmpYn?: string;
  
}
