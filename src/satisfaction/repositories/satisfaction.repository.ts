import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { Repository } from 'typeorm';
import { AddSatisfactionDto, SearchSatisfactionDto, SatisfactionEntity } from '../models';

@CustomRepository(SatisfactionEntity)
export class SatisfactionRepository extends Repository<SatisfactionEntity> {

  /** 만족도조사에 참여한다. */
  async addSatisfaction(addSatisfactionDto: AddSatisfactionDto): Promise<SatisfactionEntity> {
    return await this.save(addSatisfactionDto);
  }

  /** 만족도조사 참여 여부를 조회한다. */
  async countSatisfaction(addSatisfactionDto: AddSatisfactionDto): Promise<number> {
    return await this.createQueryBuilder('satisfaction')
      .where("DATE_FORMAT(reg_date, '%Y-%m-%d') = DATE_FORMAT(CURRENT_TIMESTAMP(), '%Y-%m-%d')")
        .andWhere("page_path = :page_path", { page_path: addSatisfactionDto.pagePath })
        .andWhere("ip = :ip", { ip: addSatisfactionDto.ip })
      .getCount();
  }

  /** 만족도조사 목록을 조회한다. */
  async listSatisfaction(searchSatisfactionDto: SearchSatisfactionDto): Promise<SatisfactionEntity[]> {
    let query = this.createQueryBuilder('satisfaction')

    if ('Y' === searchSatisfactionDto.isToday) {
      query = query
        .where("DATE_FORMAT(reg_date, '%Y-%m-%d') = DATE_FORMAT(CURRENT_TIMESTAMP(), '%Y-%m-%d')");
    }
    if (searchSatisfactionDto.regDate) {
      query = query
        .where("DATE_FORMAT(reg_date, '%Y-%m-%d') = :reg_date", { reg_date: searchSatisfactionDto.regDate });
    }

    query = query
      .orderBy("reg_date", "DESC");

    return await query.getMany();
  }

}