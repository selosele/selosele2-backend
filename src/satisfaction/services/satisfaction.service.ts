import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, EntityManager } from 'typeorm';
import { AddSatisfactiontDto, SearchSatisfactiontDto, SatisfactionEntity } from '../models';
import { SatisfactionRepository } from '../repositories/satisfaction.repository';
import { BizException } from '@/shared/exceptions/biz/biz-exception';
import { escapeHtml, kakaoUtil } from '@/shared/utils';
import { NotificationRepository } from '@/notification/repositories/notification.repository';
import { Builder } from 'builder-pattern';
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
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
    private readonly dataSource: DataSource,
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
    await this.dataSource.transaction<void>(async (em: EntityManager) => {

      // 1. 만족도조사를 등록한다.
      res = await em.withRepository(this.satisfactionRepository).addSatisfaction(addSatisfactiontDto);

      // 2. 알림을 등록한다.
      const addNotificationDto = Builder(AddNotificationDto)
                                  .cnncId(res.id)
                                  .typeCd(notificationCodes.SATISFACTION.id)
                                  .link(addSatisfactiontDto.pagePath)
                                  .senderIp(addSatisfactiontDto.ip)
                                  .title(addSatisfactiontDto.pageTitle)
                                  .build();
      await em.withRepository(this.notificationRepository).addNotification(addNotificationDto);

      // 3. 블로그 환경설정의 카카오톡 메시지 수신 여부를 조회한다.
      // const kakaoMsgYn: string = await em.withRepository(this.blogConfigRepository).getKakaoMsgYn();

      // if ('Y' === kakaoMsgYn) {

      //   // 4. 카카오톡 액세스 토큰을 갱신한다.
      //   this.httpService.post('https://kauth.kakao.com/oauth/token');

      //   // 5. 카카오톡 메시지를 전송한다.
      //   const text = `${addSatisfactiontDto.pageTitle} 페이지에 만족도 평가가 등록되었습니다.`;
      //   const url = `${this.config.get<string>('PAGE_ORIGIN')}${addSatisfactiontDto.pagePath}`;
      //   const headers = kakaoUtil.getSendMessageHeaders('token');
      //   const body = kakaoUtil.getSendMessageBody(text, url);

      //   this.httpService.post('https://kapi.kakao.com/v2/api/talk/memo/default/send', body, { headers })
      //   .subscribe({
      //     next: (resp) => {
      //       this.logger.log(`Success for send Kakao message : ${JSON.stringify(resp.data)}`);
      //     },
      //     error: (err) => {
      //       this.logger.debug(`Failure for send Kakao message : ${JSON.stringify(err.response.data)}`);
      //     }
      //   });
      // }
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
