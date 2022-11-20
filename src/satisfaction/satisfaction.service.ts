import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult } from 'typeorm';
import { AddSatisfactiontDto } from './dto/add-satisfaction.dto';
import { SatisfactionRepository } from './satisfaction.repository';
import * as sanitizeHtml from 'sanitize-html';
import { SatisfactionEntity } from './satisfaction.entity';
import { SearchSatisfactiontDto } from './dto/search-satisfaction.dto';

@Injectable()
export class SatisfactionService {

  constructor(
    @InjectRepository(SatisfactionRepository)
    private readonly satisfactionRepository: SatisfactionRepository,
  ) {}

  // 만족도조사에 참여한다.
  async addSatisfaction(addSatisfactiontDto: AddSatisfactiontDto): Promise<InsertResult> {
    const count: number = await this.countSatisfaction(addSatisfactiontDto);
    if (0 < count) {
      throw new BadRequestException('페이지별 하루에 한 번 참여할 수 있습니다.');
    }
    addSatisfactiontDto.comment = sanitizeHtml(addSatisfactiontDto.comment);
    return await this.satisfactionRepository.addSatisfaction(addSatisfactiontDto);
  }

  // 만족도조사 참여 여부를 조회한다.
  async countSatisfaction(addSatisfactiontDto: AddSatisfactiontDto): Promise<number> {
    return await this.satisfactionRepository.countSatisfaction(addSatisfactiontDto);
  }

  // 만족도조사 목록을 조회한다.
  async listSatisfaction(searchSatisfactiontDto: SearchSatisfactiontDto): Promise<SatisfactionEntity[]> {
    return await this.satisfactionRepository.listSatisfaction(searchSatisfactiontDto);
  }

}
