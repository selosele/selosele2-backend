/** 블로그 환경설정 DTO */
export class BlogConfigDto {

  /** 환경설정 ID */
  id?: number;

  /** 블로그 제목 */
  title?: string;

  /** 블로거 닉네임 */
  author?: string;

  /** 블로그 소개 */
  desc?: string;

  /** 블로그 아바타 이미지 */
  avatarImg?: string;

  /** 블로그 아바타 이미지 URL */
  avatarImgUrl?: string;

  /** 블로그 아바타 이미지 용량 */
  avatarImgSize?: number;

  /** 블로그 대표 이미지 */
  ogImg?: string;

  /** 블로그 대표 이미지 URL */
  ogImgUrl?: string;

  /** 블로그 대표 이미지 용량 */
  ogImgSize?: number;

  /** 블로그 대표 이미지 밝기 */
  ogImgContrast?: number;

  /** 블로그 대표 이미지 흐림 */
  ogImgBlur?: number;

  /** 블로그 대표 이미지 가로 위치값 */
  ogImgPosX?: number;

  /** 블로그 대표 이미지 세로 위치값 */
  ogImgPosY?: number;

  /** 블로그 대표 이미지 채우기 여부 */
  ogImgCoverYn?: string;

  /** 메인 포스트 목록 출력 개수 */
  pageSize?: number;

  /** 만족도조사 표출 여부 */
  showSatisYn?: string;

  /** 카카오톡 메시지 수신 여부 */
  kakaoMsgYn?: string;

  /** 환경설정 수정일시 */
  modDate?: Date;

}
