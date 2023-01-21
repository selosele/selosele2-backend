import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { AddGuestbookReplyDto, GuestbookReplyEntity } from '../models';
import { GuestbookReplyRepository } from '../repositories/guestbook-reply.repository';
import * as bcrypt from 'bcrypt';
import * as sanitizeHtml from 'sanitize-html';
import { ListGuestbookReplyDto } from '../models/dto/list-guestbook-reply.dto';
import { PaginationDto } from 'src/shared/models';
import { UpdateGuestbookReplyDto } from '../models/dto/update-guestbook-reply.dto';
import { BizException } from 'src/shared/exceptions';
import { RemoveGuestbookReplyDto } from '../models/dto/remove-guestbook-reply.dto';

@Injectable()
export class GuestbookReplyService {

  constructor(
    @InjectRepository(GuestbookReplyRepository)
    private readonly guestbookReplyRepository: GuestbookReplyRepository,
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

  /** 방명록 댓글을 추가한다. */
  async addGuestbookReply(addGuestbookReplyDto: AddGuestbookReplyDto): Promise<GuestbookReplyEntity> {
    const { authorPw, cont } = addGuestbookReplyDto;

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt();
    addGuestbookReplyDto.authorPw = await bcrypt.hash(authorPw, salt);

    // HTML Escape
    addGuestbookReplyDto.cont = sanitizeHtml(cont);

    return await this.guestbookReplyRepository.addGuestbookReply(addGuestbookReplyDto);
  }

  /** 방명록 댓글을 수정한다. */
  async updateGuestbookReply(updateGuestbookReplyDto: UpdateGuestbookReplyDto): Promise<GuestbookReplyEntity> {
    const { id, authorPw, cont } = updateGuestbookReplyDto;

    const foundGuestbookReply: GuestbookReplyEntity = await this.getGuestbookReply(id);
    const matchPw = await bcrypt.compare(authorPw, foundGuestbookReply.authorPw);

    if (!matchPw) {
      throw new BizException('비밀번호를 확인하세요.');
    }

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt();
    updateGuestbookReplyDto.authorPw = await bcrypt.hash(authorPw, salt);

    // HTML Escape
    updateGuestbookReplyDto.cont = sanitizeHtml(cont);

    // 방명록 댓글 수정
    return await this.guestbookReplyRepository.updateGuestbookReply(updateGuestbookReplyDto);
  }

  /** 방명록 댓글을 삭제한다. */
  async removeGuestbookReply(removeGuestbookReplyDto: RemoveGuestbookReplyDto): Promise<GuestbookReplyEntity> {
    const { id, authorPw } = removeGuestbookReplyDto;

    if ('N' === removeGuestbookReplyDto.isLogin) {
      const foundGuestbook: GuestbookReplyEntity = await this.getGuestbookReply(id);
      const matchPw = await bcrypt.compare(authorPw, foundGuestbook.authorPw);
  
      if (!matchPw) {
        throw new BizException('비밀번호를 확인하세요.');
      }
    }
    
    return this.guestbookReplyRepository.removeGuestbookReply(<GuestbookReplyEntity>removeGuestbookReplyDto);
  }

}
