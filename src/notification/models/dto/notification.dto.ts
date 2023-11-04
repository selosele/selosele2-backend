/** 알림 DTO */
export class NotificationDto {

  /** 알림 ID */
  id?: number;

  /** 알림 연결 ID */
  cnncId?: number;

  /** 알림 유형 코드 */
  typeCd?: string;

  /** 알림 링크 */
  link?: string;

  /** 알림 발신자 명 */
  senderNm?: string;

  /** 알림 제목 */
  title?: string;

  /** 알림 확인 여부 */
  checkYn?: string;

  /** 알림 등록일시 */
  regDate?: Date;

  /** 알림 수정일시 */
  modDate?: Date;
  
}
