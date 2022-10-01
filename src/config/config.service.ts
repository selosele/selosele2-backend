import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Config } from './config.entity';
import { ConfigRepository } from './config.repository';

@Injectable()
export class ConfigService {
  constructor(
    @InjectRepository(Config)
    private readonly configRepository: ConfigRepository,
  ) {}

  // 블로그 환경설정 정보를 조회한다.
  async find(): Promise<Config> {
    return await this.configRepository.findOne({
      where: { id: 1 },
    });
  }
  
}
