import { PostCategoryEntity } from '@/category/models';
import { PostTagEntity } from '@/tag/models';

/** 검색 색인 데이터 DTO */
export class IndexSearchDto {

  /** 색인 데이터 ID */
  id?: number;

  /** 색인 연결 데이터 ID */
  cnncId?: number;

  /** 색인 연결 데이터 등록일시 */
  cnncRegDate?: Date;

  /** 색인 데이터 제목 */
  title?: string;

  /** 색인 데이터 내용 */
  cont?: string;

  /** 색인 데이터 내용의 순수 텍스트 */
  rawText?: string;

  /** 색인 데이터 대표 이미지 URL */
  ogImgUrl?: string;

  /** 색인 데이터 비공개 여부 */
  secretYn?: string;

  /** 색인 데이터 상단고정 여부 */
  pinYn?: string;

  /** 색인 데이터 추천 수 */
  likeCnt?: number;

  /** 색인 데이터 댓글 수 */
  replyCnt?: number;

  /** 색인 데이터 유형 코드 */
  typeCd?: string;

  /** 색인 데이터 등록일시 */
  regDate?: Date;

  /** 포스트 카테고리 */
  postCategory?: PostCategoryEntity[];

  /** 포스트 태그 */
  postTag?: PostTagEntity[];
  
}
