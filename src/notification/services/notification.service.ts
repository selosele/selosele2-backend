import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult } from 'typeorm';
import { AddNotificationDto, ListNotificationDto, NotificationEntity } from '../models';
import { NotificationRepository } from '../repositories/notification.repository';

@Injectable()
export class NotificationService {

  constructor(
    @InjectRepository(NotificationRepository)
    private readonly notificationRepository: NotificationRepository,
  ) {}

  /** 알림 목록을 조회한다. */
  async listNotification(listNotificationDto?: ListNotificationDto): Promise<[NotificationEntity[], number]> {
    return this.notificationRepository.listNotification(listNotificationDto);
  }

  /** 알림을 추가한다. */
  async addNotification(addNotificationDto: AddNotificationDto): Promise<NotificationEntity> {
    return this.notificationRepository.addNotification(addNotificationDto);
  }

  /** 알림 확인 여부를 수정한다. */
  async updateNotificationCheckYn(idList: number[]): Promise<UpdateResult> {
    return this.notificationRepository.updateNotificationCheckYn(idList);
  }

}
