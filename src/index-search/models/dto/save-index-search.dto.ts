import { IsNotEmpty, IsOptional } from 'class-validator';

/** 검색 색인 데이터 색인 저장 DTO */
export class SaveIndexSearchDto {

  /** 색인 데이터 ID */
  @IsNotEmpty()
  id?: number;

  /** 색인 연결 데이터 ID */
  @IsNotEmpty()
  cnncId?: number;

  /** 색인 연결 데이터 등록연도 */
  @IsOptional()
  cnncRegYear?: string;

  /** 색인 연결 데이터 등록일시 */
  @IsOptional()
  cnncRegDate?: Date;

  /** 색인 데이터 제목 */
  @IsNotEmpty()
  title?: string;

  /** 색인 데이터 내용 */
  @IsOptional()
  cont?: string;

  /** 색인 데이터 대표 이미지 URL */
  @IsOptional()
  ogImgUrl?: string;

  /** 색인 데이터 비공개 여부 */
  @IsOptional()
  secretYn?: string;

  /** 색인 데이터 상단고정 여부 */
  @IsOptional()
  pinYn?: string;

  /** 색인 데이터 추천 수 */
  @IsOptional()
  likeCnt?: number;

  /** 색인 데이터 댓글 수 */
  @IsOptional()
  replyCnt?: number;

  /** 색인 데이터 카테고리 정보 */
  @IsOptional()
  category?: string;

  /** 색인 데이터 태그 정보 */
  @IsOptional()
  tag?: string;

  /** 색인 데이터 유형 코드 */
  @IsOptional()
  typeCd?: string;

}
