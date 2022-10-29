import { CustomRepository } from "src/configs/CustomRepository";
import { InsertResult, Repository } from "typeorm";
import { AddSatisfactiontDto } from "./dto/add-satisfaction.dto";
import { Satisfaction } from "./satisfaction.entity";

@CustomRepository(Satisfaction)
export class SatisfactionRepository extends Repository<Satisfaction> {

  // 만족도조사에 참여한다.
  async addSatisfaction(addSatisfactiontDto: AddSatisfactiontDto): Promise<InsertResult> {
    return await this.insert(addSatisfactiontDto);
  }

  // 만족도조사 참여 여부를 조회한다.
  async countSatisfaction(addSatisfactiontDto: AddSatisfactiontDto): Promise<number> {
    return await this.createQueryBuilder('satisfaction')
      .where("DATE_FORMAT(reg_date, '%Y-%m-%d') = DATE_FORMAT(CURRENT_TIMESTAMP(), '%Y-%m-%d')")
      .andWhere("page_path = :page_path", { page_path: addSatisfactiontDto.pagePath })
      .andWhere("ip = :ip", { ip: addSatisfactiontDto.ip })
      .getCount();
  }

  // 만족도조사 목록을 조회한다.
  async listSatisfaction(): Promise<Satisfaction[]> {
    return await this.find({
      select: {
        ip: false,
      },
      order: {
        regDate: 'DESC',
      },
    });
  }

}