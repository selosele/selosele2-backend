import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { AddGuestbookReplyDto, UpdateGuestbookReplyDto, RemoveGuestbookReplyDto, ListGuestbookReplyDto, GuestbookReplyEntity } from '../models';
import { GuestbookReplyRepository } from '../repositories/guestbook-reply.repository';
import { PaginationDto } from '@/shared/models';
import { BizException } from '@/shared/exceptions';
import { compareEncrypt, encrypt, escapeHtml, startTransaction } from '@/shared/utils';
import { EntityManager } from 'typeorm';
import { AddNotificationDto, notificationCodes } from '@/notification/models';
import { Builder } from 'builder-pattern';
import { NotificationRepository } from '@/notification/repositories/notification.repository';

@Injectable()
export class GuestbookReplyService {

  constructor(
    @InjectRepository(GuestbookReplyRepository)
    private readonly guestbookReplyRepository: GuestbookReplyRepository,
    @InjectRepository(NotificationRepository)
    private readonly notificationRepository: NotificationRepository,
  ) {}

  /** 방명록 댓글 목록을 조회한다. */
  async listGuestbookReply(
    listGuestbookReplyDto: ListGuestbookReplyDto,
    paginationDto: PaginationDto
  ): Promise<[GuestbookReplyEntity[], number]> {
    return await this.guestbookReplyRepository.listGuestbookReply(listGuestbookReplyDto, paginationDto);
  }

  /** 방명록 댓글을 조회한다. */
  async getGuestbookReply(id: number): Promise<GuestbookReplyEntity> {
    return await this.guestbookReplyRepository.getGuestbookReply(id);
  }

  /** 방명록 댓글을 등록한다. */
  async addGuestbookReply(addGuestbookReplyDto: AddGuestbookReplyDto): Promise<GuestbookReplyEntity> {
    const { authorPw, cont } = addGuestbookReplyDto;

    // 비밀번호 암호화
    addGuestbookReplyDto.authorPw = await encrypt(authorPw);

    // HTML Escape
    addGuestbookReplyDto.cont = escapeHtml(cont);

    let guestbookReply: GuestbookReplyEntity = null;

    // 트랜잭션을 시작한다.
    await startTransaction(async (em: EntityManager) => {

      // 1. 방명록 댓글을 등록한다.
      guestbookReply = await em.withRepository(this.guestbookReplyRepository).addGuestbookReply(addGuestbookReplyDto);
      delete guestbookReply.authorPw;

      // 2. 알림을 등록한다.
      if ('N' === addGuestbookReplyDto.adminYn) {
        const addNotificationDto = Builder(AddNotificationDto)
                                    .cnncId(guestbookReply.id)
                                    .typeCd(notificationCodes.GUESTBOOK_REPLY.id)
                                    .link('/guestbook')
                                    .senderIp(addGuestbookReplyDto.ip)
                                    .senderNm(addGuestbookReplyDto.author)
                                    .build();
        await em.withRepository(this.notificationRepository).addNotification(addNotificationDto);
      }
    });

    return guestbookReply;
  }

  /** 방명록 댓글을 수정한다. */
  async updateGuestbookReply(updateGuestbookReplyDto: UpdateGuestbookReplyDto): Promise<GuestbookReplyEntity> {
    const { authorPw, cont } = updateGuestbookReplyDto;

    // 비밀번호 비교
    const isValid: boolean = await this.compareAuthorPassword(updateGuestbookReplyDto);
    if (!isValid) throw new BizException('비밀번호를 확인하세요.');

    // 비밀번호 암호화
    updateGuestbookReplyDto.authorPw = await encrypt(authorPw);

    // HTML Escape
    updateGuestbookReplyDto.cont = escapeHtml(cont);

    // 방명록 댓글 수정
    const guestbookReply = await this.guestbookReplyRepository.updateGuestbookReply(updateGuestbookReplyDto);
    delete guestbookReply.authorPw;

    return guestbookReply;
  }

  /** 방명록 댓글을 삭제한다. */
  async removeGuestbookReply(removeGuestbookReplyDto: RemoveGuestbookReplyDto): Promise<GuestbookReplyEntity> {

    // 관리자가 아닌 경우는 비밀번호를 비교한다.
    if ('N' === removeGuestbookReplyDto.isLogin) {
      const isValid: boolean = await this.compareAuthorPassword(removeGuestbookReplyDto);
      if (!isValid) throw new BizException('비밀번호를 확인하세요.');
    }
    
    return await this.guestbookReplyRepository.removeGuestbookReply(<GuestbookReplyEntity>removeGuestbookReplyDto);
  }

  /** 방명록 댓글 작성자의 비밀번호를 비교한다. */
  async compareAuthorPassword(dto: UpdateGuestbookReplyDto | RemoveGuestbookReplyDto): Promise<boolean> {
    const { id, authorPw } = dto;

    const foundGuestbookReply: GuestbookReplyEntity = await this.getGuestbookReply(id);
    const matchPw = await compareEncrypt(authorPw, foundGuestbookReply.authorPw);

    if (!matchPw) return false;

    return true;
  }

}
