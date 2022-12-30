import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult } from 'typeorm';
import { AddSatisfactiontDto } from './dto/add-satisfaction.dto';
import { SatisfactionRepository } from './satisfaction.repository';
import * as sanitizeHtml from 'sanitize-html';
import { SatisfactionEntity } from './entities/satisfaction.entity';
import { SearchSatisfactiontDto } from './dto/search-satisfaction.dto';
import { BizException } from 'src/shared/exception/biz.exception';

@Injectable()
export class SatisfactionService {

  constructor(
    @InjectRepository(SatisfactionRepository)
    private readonly satisfactionRepository: SatisfactionRepository,
  ) {}

  /** 만족도조사에 참여한다. */
  async addSatisfaction(addSatisfactiontDto: AddSatisfactiontDto): Promise<InsertResult> {
    const foundCount: number = await this.countSatisfaction(addSatisfactiontDto);
    if (0 < foundCount) {
      throw new BizException('페이지별 하루에 한 번 참여할 수 있습니다.');
    }

    // HTML Escape
    addSatisfactiontDto.comment = sanitizeHtml(addSatisfactiontDto.comment);
    return await this.satisfactionRepository.addSatisfaction(addSatisfactiontDto);
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
