import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { Repository } from 'typeorm';
import { AddSatisfactiontDto, SearchSatisfactiontDto, SatisfactionEntity } from '../models';
import { getCurrentTimeStamp } from '@/shared/utils';

@CustomRepository(SatisfactionEntity)
export class SatisfactionRepository extends Repository<SatisfactionEntity> {

  /** 만족도조사에 참여한다. */
  async addSatisfaction(addSatisfactiontDto: AddSatisfactiontDto): Promise<SatisfactionEntity> {
    return await this.save(addSatisfactiontDto);
  }

  /** 만족도조사 참여 여부를 조회한다. */
  async countSatisfaction(addSatisfactiontDto: AddSatisfactiontDto): Promise<number> {
    return await this.createQueryBuilder('satisfaction')
      .where("reg_date >= :startOfDay", { startOfDay: getCurrentTimeStamp(new Date()) })
        .andWhere("page_path = :page_path", { page_path: addSatisfactiontDto.pagePath })
        .andWhere("ip = :ip", { ip: addSatisfactiontDto.ip })
      .getCount();
  }

  /** 만족도조사 목록을 조회한다. */
  async listSatisfaction(searchSatisfactiontDto: SearchSatisfactiontDto): Promise<SatisfactionEntity[]> {
    let query = this.createQueryBuilder('satisfaction');

    if ('Y' === searchSatisfactiontDto.isToday) {
      query = query
        .where("reg_date >= :startOfDay", { startOfDay: getCurrentTimeStamp(new Date()) });
    }
    if (searchSatisfactiontDto.regDate) {
      query = query
        .where("reg_date >= :startOfDay", { startOfDay: getCurrentTimeStamp(new Date(searchSatisfactiontDto.regDate.toString())) });
    }

    query = query
      .orderBy("reg_date", "DESC");

    return await query.getMany();
  }

}