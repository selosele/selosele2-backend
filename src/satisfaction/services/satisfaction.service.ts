import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult } from 'typeorm';
import { AddSatisfactiontDto, SearchSatisfactiontDto, SatisfactionEntity } from '../models';
import { SatisfactionRepository } from '../repositories/satisfaction.repository';
import { BizException } from 'src/shared/exceptions/biz/biz.exception';
import { escapeHtml } from 'src/shared/utils';

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
    addSatisfactiontDto.comment = escapeHtml(addSatisfactiontDto.comment);
    
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
