import { CustomRepository } from "src/configs/database/CustomRepository";
import { InsertResult, Repository } from "typeorm";
import { AddSatisfactiontDto, SearchSatisfactiontDto, SatisfactionEntity } from "../models";

@CustomRepository(SatisfactionEntity)
export class SatisfactionRepository extends Repository<SatisfactionEntity> {

  /** 만족도조사에 참여한다. */
  async addSatisfaction(addSatisfactiontDto: AddSatisfactiontDto): Promise<InsertResult> {
    return await this.insert(addSatisfactiontDto);
  }

  /** 만족도조사 참여 여부를 조회한다. */
  async countSatisfaction(addSatisfactiontDto: AddSatisfactiontDto): Promise<number> {
    return await this.createQueryBuilder('satisfaction')
      .where("DATE_FORMAT(reg_date, '%Y-%m-%d') = DATE_FORMAT(CURRENT_TIMESTAMP(), '%Y-%m-%d')")
        .andWhere("page_path = :page_path", { page_path: addSatisfactiontDto.pagePath })
        .andWhere("ip = :ip", { ip: addSatisfactiontDto.ip })
      .getCount();
  }

  /** 만족도조사 목록을 조회한다. */
  async listSatisfaction(searchSatisfactiontDto: SearchSatisfactiontDto): Promise<SatisfactionEntity[]> {
    let query = this.createQueryBuilder('satisfaction')

    if ('Y' === searchSatisfactiontDto.isToday) {
      query = query
        .where("DATE_FORMAT(reg_date, '%Y-%m-%d') = DATE_FORMAT(CURRENT_TIMESTAMP(), '%Y-%m-%d')");
    }
    if (searchSatisfactiontDto.regDate) {
      query = query
        .where("DATE_FORMAT(reg_date, '%Y-%m-%d') =:reg_date", { reg_date: searchSatisfactiontDto.regDate });
    }

    query = query
      .orderBy("reg_date", "DESC");

    return await query.getMany();
  }

}