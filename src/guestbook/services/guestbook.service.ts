import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/shared/models';
import { AddGuestbookDto, RemoveGuestbookDto, UpdateGuestbookDto, GuestbookEntity } from '../models';
import { GuestbookRepository } from '../repositories/guestbook.repository';
import * as bcrypt from 'bcrypt';
import * as sanitizeHtml from 'sanitize-html';
import { BizException } from 'src/shared/exceptions/biz/biz.exception';

@Injectable()
export class GuestbookService {

  constructor(
    @InjectRepository(GuestbookRepository)
    private readonly guestbookRepository: GuestbookRepository,
  ) {}

  /** 방명록 목록을 조회한다. */
  async listGuestbook(paginationDto: PaginationDto): Promise<[GuestbookEntity[], number]> {
    return await this.guestbookRepository.listGuestbook(paginationDto);
  }

  /** 방명록을 조회한다. */
  async getGuestbook(id: number): Promise<GuestbookEntity> {
    return await this.guestbookRepository.getGuestbook(id);
  }

  /** 방명록을 추가한다. */
  async addGuestbook(addGuestbookDto: AddGuestbookDto): Promise<GuestbookEntity> {
    const { authorPw, cont } = addGuestbookDto;

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt();
    addGuestbookDto.authorPw = await bcrypt.hash(authorPw, salt);

    // HTML Escape
    addGuestbookDto.cont = sanitizeHtml(cont);

    // 방명록 추가
    const guestbook: GuestbookEntity = await this.guestbookRepository.addGuestbook(addGuestbookDto);
    guestbook.guestbookReply = [];
    
    return guestbook;
  }

  /** 방명록을 수정한다. */
  async updateGuestbook(updateGuestbookDto: UpdateGuestbookDto): Promise<GuestbookEntity> {
    const { id, authorPw, cont } = updateGuestbookDto;

    const foundGuestbook: GuestbookEntity = await this.getGuestbook(id);
    const matchPw = await bcrypt.compare(authorPw, foundGuestbook.authorPw);

    if (!matchPw) {
      throw new BizException('비밀번호를 확인하세요.');
    }

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt();
    updateGuestbookDto.authorPw = await bcrypt.hash(authorPw, salt);

    // HTML Escape
    updateGuestbookDto.cont = sanitizeHtml(cont);

    // 방명록 수정
    const guestbook: GuestbookEntity = await this.guestbookRepository.updateGuestbook(updateGuestbookDto);
    guestbook.guestbookReply = [];
    
    return guestbook;
  }

  /** 방명록을 삭제한다. */
  async removeGuestbook(removeGuestbookDto: RemoveGuestbookDto): Promise<GuestbookEntity> {
    const { id, authorPw } = removeGuestbookDto;

    if ('N' === removeGuestbookDto.isLogin) {
      const foundGuestbook: GuestbookEntity = await this.getGuestbook(id);
      const matchPw = await bcrypt.compare(authorPw, foundGuestbook.authorPw);
  
      if (!matchPw) {
        throw new BizException('비밀번호를 확인하세요.');
      }
    }
    
    return this.guestbookRepository.removeGuestbook(<GuestbookEntity>removeGuestbookDto);
  }

}
