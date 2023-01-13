import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { AddGuestbookReplyDto, GuestbookReplyEntity } from '../models';
import { GuestbookReplyRepository } from '../repositories/guestbook-reply.repository';
import * as bcrypt from 'bcrypt';
import * as sanitizeHtml from 'sanitize-html';

@Injectable()
export class GuestbookReplyService {

  constructor(
    @InjectRepository(GuestbookReplyRepository)
    private readonly guestbookReplyRepository: GuestbookReplyRepository,
  ) {}

  /** 방명록 댓글을 등록한다. */
  async addGuestbookReply(addGuestbookReplyDto: AddGuestbookReplyDto): Promise<GuestbookReplyEntity> {
    const { authorPw, cont } = addGuestbookReplyDto;

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt();
    addGuestbookReplyDto.authorPw = await bcrypt.hash(authorPw, salt);

    // HTML Escape
    addGuestbookReplyDto.cont = sanitizeHtml(cont);

    return await this.guestbookReplyRepository.addGuestbookReply(addGuestbookReplyDto);
  }

}
