import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { Config } from './config.entity';

@CustomRepository(Config)
export class ConfigRepository extends Repository<Config> {

  // 블로그 환경설정 정보를 조회한다.
  async getConfig(): Promise<Config> {
    return await this.findOne({
      where: { id: 1 },
    });
  }

}
