import { CustomRepository } from 'src/configs/database/CustomRepository';
import { isNotEmpty } from 'src/shared/utils';
import { Repository, UpdateResult } from 'typeorm';
import { AddNotificationDto, ListNotificationDto, NotificationEntity } from '../models';

@CustomRepository(NotificationEntity)
export class NotificationRepository extends Repository<NotificationEntity> {

  /** 알림 목록을 조회한다. */
  async listNotification(listNotificationDto?: ListNotificationDto): Promise<[NotificationEntity[], number]> {
    return this.findAndCount({
      where: {
        ...(isNotEmpty(listNotificationDto.typeCd) && {
          typeCd: listNotificationDto.typeCd
        }),
        checkYn: 'N',
      },
      order: {
        regDate: 'DESC',
      }
    });
  }

  /** 알림을 등록한다. */
  async addNotification(addNotificationDto: AddNotificationDto): Promise<NotificationEntity> {
    return this.save(addNotificationDto);
  }

  /** 알림 확인 여부를 수정한다. */
  async updateNotificationCheckYn(idList: number[]): Promise<UpdateResult> {
    return this.update(idList, {
      checkYn: 'Y',
    });
  }

}
