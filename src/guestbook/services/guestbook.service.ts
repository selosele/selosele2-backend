import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from '@/shared/models';
import { AddGuestbookDto, RemoveGuestbookDto, UpdateGuestbookDto, GuestbookEntity } from '../models';
import { GuestbookRepository } from '../repositories/guestbook.repository';
import { BizException } from '@/shared/exceptions/biz/biz-exception';
import { compareEncrypt, encrypt, escapeHtml } from '@/shared/utils';
import { DataSource, EntityManager } from 'typeorm';
import { AddNotificationDto, notificationCodes } from '@/notification/models';
import { NotificationRepository } from '@/notification/repositories/notification.repository';
import { UserEntity } from '@/auth/models';
import { AuthService } from '@/auth/services/auth.service';

@Injectable()
export class GuestbookService {

  constructor(
    @InjectRepository(GuestbookRepository)
    private readonly guestbookRepository: GuestbookRepository,
    @InjectRepository(NotificationRepository)
    private readonly notificationRepository: NotificationRepository,
    private readonly authService: AuthService,
    private readonly dataSource: DataSource,
  ) {}

  /** 방명록 목록을 조회한다. */
  async listGuestbook(paginationDto: PaginationDto): Promise<[GuestbookEntity[], number]> {
    return await this.guestbookRepository.listGuestbook(paginationDto);
  }

  /** 방명록을 조회한다. */
  async getGuestbook(id: number): Promise<GuestbookEntity> {
    return await this.guestbookRepository.getGuestbook(id);
  }

  /** 방명록을 등록한다. */
  async addGuestbook(addGuestbookDto: AddGuestbookDto, userSn: number): Promise<GuestbookEntity> {
    const { cont, adminYn } = addGuestbookDto;

    // 관리자의 경우 관리자 비밀번호로 설정해준다.
    if ('Y' === adminYn) {
      const user: UserEntity = await this.authService.getUser(userSn);
      addGuestbookDto.authorPw = user.userPw;
    }

    // 비밀번호 암호화
    addGuestbookDto.authorPw = await encrypt(addGuestbookDto.authorPw);

    // HTML Escape
    addGuestbookDto.cont = escapeHtml(cont);

    // 트랜잭션을 시작한다.
    const result = await this.dataSource.transaction<GuestbookEntity>(async (em: EntityManager) => {

      // 1. 방명록을 등록한다.
      const guestbook: GuestbookEntity = await em.withRepository(this.guestbookRepository).addGuestbook(addGuestbookDto);
      guestbook.guestbookReply = [];
      delete guestbook.authorPw;

      // 2. 알림을 등록한다.
      if ('N' === addGuestbookDto.adminYn) {
        const addNotificationDto: AddNotificationDto = {};
        addNotificationDto.cnncId = guestbook.id;
        addNotificationDto.typeCd = notificationCodes.GUESTBOOK.id;
        addNotificationDto.link = '/guestbook';
        addNotificationDto.senderIp = addGuestbookDto.ip;
        addNotificationDto.senderNm = addGuestbookDto.author;
        
        await em.withRepository(this.notificationRepository).addNotification(addNotificationDto);
      }
      return guestbook;
    });

    return result;
  }

  /** 방명록을 수정한다. */
  async updateGuestbook(updateGuestbookDto: UpdateGuestbookDto, userSn: number): Promise<GuestbookEntity> {
    const { cont, adminYn } = updateGuestbookDto;

    // 관리자의 경우 관리자 비밀번호로 설정해준다.
    if ('Y' === adminYn) {
      const user: UserEntity = await this.authService.getUser(userSn);
      updateGuestbookDto.authorPw = user.userPw;
    }

    // 비밀번호 비교
    const isValid: boolean = await this.compareAuthorPassword(updateGuestbookDto);
    if (!isValid) throw new BizException('비밀번호를 확인하세요.');

    // 비밀번호 암호화
    updateGuestbookDto.authorPw = await encrypt(updateGuestbookDto.authorPw);

    // HTML Escape
    updateGuestbookDto.cont = escapeHtml(cont);

    // 방명록 수정
    const guestbook: GuestbookEntity = await this.guestbookRepository.updateGuestbook(updateGuestbookDto);
    guestbook.guestbookReply = [];
    delete guestbook.authorPw;
    
    return guestbook;
  }

  /** 방명록을 삭제한다. */
  async removeGuestbook(removeGuestbookDto: RemoveGuestbookDto): Promise<GuestbookEntity> {

    // 관리자가 아닌 경우는 비밀번호를 비교한다.
    if ('N' === removeGuestbookDto.isLogin) {
      const isValid: boolean = await this.compareAuthorPassword(removeGuestbookDto);
      if (!isValid) throw new BizException('비밀번호를 확인하세요.');
    }
    
    return await this.guestbookRepository.removeGuestbook(<GuestbookEntity>removeGuestbookDto);
  }

  /** 방명록 작성자의 비밀번호를 비교한다. */
  async compareAuthorPassword(removeGuestbookDto: RemoveGuestbookDto): Promise<boolean> {
    const { id, authorPw } = removeGuestbookDto;

    const foundGuestbook: GuestbookEntity = await this.getGuestbook(id);
    const matchPw = await compareEncrypt(authorPw, foundGuestbook.authorPw);

    if (!matchPw) return false;

    return true;
  }

}
