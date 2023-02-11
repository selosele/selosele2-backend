import { IsEmpty, IsNotEmpty, IsOptional } from 'class-validator';

/** 알림 추가 DTO */
export class AddNotificationDto {

  /** 알림 연결 ID */
  @IsNotEmpty()
  cnncId?: number;

  /** 알림 유형 코드 */
  @IsNotEmpty()
  typeCd?: string;

  /** 알림 링크 */
  @IsEmpty()
  link?: string;

  /** 알림 발신자 IP */
  @IsEmpty()
  senderIp?: string;

  /** 알림 발신자 명 */
  @IsOptional()
  senderNm?: string;

  /** 알림 제목 */
  @IsOptional()
  title?: string;

}
