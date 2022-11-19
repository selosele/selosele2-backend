import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Guestbook } from './guestbook.entity';
import { GuestbookRepository } from './guestbook.repository';

@Injectable()
export class GuestbookService {

  constructor(
    @InjectRepository(GuestbookRepository)
    private readonly guestbookRepository: GuestbookRepository,
  ) {}

  // 방명록 목록을 조회한다.
  async listGuestbook(paginationDto: PaginationDto): Promise<[Guestbook[], number]> {
    return await this.guestbookRepository.listGuestbook(paginationDto);
  }

}
