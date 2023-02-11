import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, InsertResult } from 'typeorm';
import { AddSatisfactiontDto, SearchSatisfactiontDto, SatisfactionEntity } from '../models';
import { SatisfactionRepository } from '../repositories/satisfaction.repository';
import { BizException } from 'src/shared/exceptions/biz/biz.exception';
import { escapeHtml, startTransaction } from 'src/shared/utils';
import { NotificationRepository } from 'src/notification/repositories/notification.repository';
import { Builder } from 'builder-pattern';
import { AddNotificationDto } from 'src/notification/models';

@Injectable()
export class SatisfactionService {

  constructor(
    @InjectRepository(SatisfactionRepository)
    private readonly satisfactionRepository: SatisfactionRepository,
    @InjectRepository(NotificationRepository)
    private readonly notificationRepository: NotificationRepository,
  ) {}

  /** 만족도조사에 참여한다. */
  async addSatisfaction(addSatisfactiontDto: AddSatisfactiontDto): Promise<SatisfactionEntity> {
    const foundCount: number = await this.countSatisfaction(addSatisfactiontDto);
    if (0 < foundCount) {
      throw new BizException('페이지별 하루에 한 번 참여할 수 있습니다.');
    }

    // HTML Escape
    addSatisfactiontDto.comment = escapeHtml(addSatisfactiontDto.comment);

    let res: SatisfactionEntity = null;

    // 트랜잭션을 시작한다.
    await startTransaction(async (entityManager: EntityManager) => {

      // 1. 만족도조사를 추가한다.
      res = await entityManager.withRepository(this.satisfactionRepository).addSatisfaction(addSatisfactiontDto);

      // 2. 알림을 추가한다.
      const addNotificationDto: AddNotificationDto = Builder(AddNotificationDto)
                                                     .cnncId(res.id)
                                                     .typeCd('D02005')
                                                     .link(addSatisfactiontDto.pagePath)
                                                     .senderIp(addSatisfactiontDto.ip)
                                                     .title(addSatisfactiontDto.pageTitle)
                                                     .build();
      await entityManager.withRepository(this.notificationRepository).addNotification(addNotificationDto);
    });
    
    return res;
  }

  /** 만족도조사 참여 여부를 조회한다. */
  async countSatisfaction(addSatisfactiontDto: AddSatisfactiontDto): Promise<number> {
    return await this.satisfactionRepository.countSatisfaction(addSatisfactiontDto);
  }

  /** 만족도조사 목록을 조회한다. */
  async listSatisfaction(searchSatisfactiontDto: SearchSatisfactiontDto): Promise<SatisfactionEntity[]> {
    return await this.satisfactionRepository.listSatisfaction(searchSatisfactiontDto);
  }

}
