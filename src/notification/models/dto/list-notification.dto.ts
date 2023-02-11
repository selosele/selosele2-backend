import { IsOptional } from 'class-validator';

/** 알림 목록 조회 DTO */
export class ListNotificationDto {

  /** 콘텐츠 ID */
  @IsOptional()
  typeCd?: string;

}
