import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, EntityManager } from 'typeorm';
import { AddSatisfactionDto, SearchSatisfactionDto, SatisfactionEntity } from '../models';
import { SatisfactionRepository } from '../repositories/satisfaction.repository';
import { BizException } from '@/shared/exceptions/biz/biz-exception';
import { escapeHtml } from '@/shared/utils';
import { NotificationRepository } from '@/notification/repositories/notification.repository';
import { AddNotificationDto, notificationCodes } from '@/notification/models';
import { HttpService } from '@nestjs/axios/dist/http.service';
import { BlogConfigRepository } from '@/blog-config/repositories/blog-config.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SatisfactionService {

  private logger = new Logger(SatisfactionService.name);

  constructor(
    @InjectRepository(SatisfactionRepository)
    private readonly satisfactionRepository: SatisfactionRepository,
    @InjectRepository(NotificationRepository)
    private readonly notificationRepository: NotificationRepository,
    @InjectRepository(BlogConfigRepository)
    private readonly blogConfigRepository: BlogConfigRepository,
    private readonly dataSource: DataSource,
    private readonly http: HttpService,
    private readonly env: ConfigService,
  ) {}

  /** 만족도조사에 참여한다. */
  async addSatisfaction(addSatisfactionDto: AddSatisfactionDto): Promise<SatisfactionEntity> {
    const foundCount: number = await this.countSatisfaction(addSatisfactionDto);
    if (0 < foundCount) {
      throw new BizException('페이지별 하루에 한 번 참여할 수 있습니다.');
    }

    // HTML Escape
    addSatisfactionDto.comment = escapeHtml(addSatisfactionDto.comment);

    // 트랜잭션을 시작한다.
    const result = await this.dataSource.transaction<SatisfactionEntity>(async (em: EntityManager) => {

      // 1. 만족도조사를 등록한다.
      const satisfaction: SatisfactionEntity = await em.withRepository(this.satisfactionRepository).addSatisfaction(addSatisfactionDto);

      // 2. 알림을 등록한다.
      const addNotificationDto: AddNotificationDto = {};
      addNotificationDto.cnncId = satisfaction.id;
      addNotificationDto.typeCd = notificationCodes.SATISFACTION.id;
      addNotificationDto.link = addSatisfactionDto.pagePath;
      addNotificationDto.senderIp = addSatisfactionDto.ip;
      addNotificationDto.title = addSatisfactionDto.pageTitle;

      await em.withRepository(this.notificationRepository).addNotification(addNotificationDto);

      // 3. 블로그 환경설정의 카카오톡 메시지 수신 여부를 조회한다.
      // const kakaoMsgYn: string = await em.withRepository(this.blogConfigRepository).getKakaoMsgYn();

      // if ('Y' === kakaoMsgYn) {

      //   // 4. 카카오톡 액세스 토큰을 갱신한다.
      //   await lastValueFrom(this.http.post('https://kauth.kakao.com/oauth/token'));

      //   // 5. 카카오톡 메시지를 전송한다.
      //   const text = `${addSatisfactionDto.pageTitle} 페이지에 만족도 평가가 등록되었습니다.`;
      //   const url = `${this.env.get<string>('PAGE_ORIGIN')}${addSatisfactionDto.pagePath}`;
      //   const headers = kakaoUtil.getSendMessageHeaders('token');
      //   const body = kakaoUtil.getSendMessageBody(text, url);

      //   this.http.post('https://kapi.kakao.com/v2/api/talk/memo/default/send', body, { headers })
      //   .subscribe({
      //     next: (resp) => {
      //       this.logger.log(`Success for send Kakao message : ${JSON.stringify(resp.data)}`);
      //     },
      //     error: (err) => {
      //       this.logger.debug(`Failure for send Kakao message : ${JSON.stringify(err.response.data)}`);
      //     }
      //   });
      // }

      return satisfaction;
    });
    
    return result;
  }

  /** 만족도조사 참여 여부를 조회한다. */
  async countSatisfaction(addSatisfactionDto: AddSatisfactionDto): Promise<number> {
    return await this.satisfactionRepository.countSatisfaction(addSatisfactionDto);
  }

  /** 만족도조사 목록을 조회한다. */
  async listSatisfaction(searchSatisfactionDto: SearchSatisfactionDto): Promise<SatisfactionEntity[]> {
    return await this.satisfactionRepository.listSatisfaction(searchSatisfactionDto);
  }

}
