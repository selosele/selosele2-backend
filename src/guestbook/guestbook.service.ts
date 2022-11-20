import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AddGuestbookDto } from './dto/add-guestbook.dto';
import { GuestbookEntity } from './guestbook.entity';
import { GuestbookRepository } from './guestbook.repository';
import * as bcrypt from 'bcrypt';
import * as sanitizeHtml from 'sanitize-html';

@Injectable()
export class GuestbookService {

  constructor(
    @InjectRepository(GuestbookRepository)
    private readonly guestbookRepository: GuestbookRepository,
  ) {}

  // 방명록 목록을 조회한다.
  async listGuestbook(paginationDto: PaginationDto): Promise<[GuestbookEntity[], number]> {
    return await this.guestbookRepository.listGuestbook(paginationDto);
  }

  // 방명록을 등록한다.
  async addGuestbook(addGuestbookDto: AddGuestbookDto): Promise<GuestbookEntity> {
    const { authorPw } = addGuestbookDto;

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt();
    addGuestbookDto.authorPw = await bcrypt.hash(authorPw, salt);

    // HTML Escape
    addGuestbookDto.cont = sanitizeHtml(addGuestbookDto.cont);

    // 방명록 등록
    const guestbook = await this.guestbookRepository.addGuestbook(addGuestbookDto);
    guestbook.guestbookReply = [];
    
    return guestbook;
  }

}
