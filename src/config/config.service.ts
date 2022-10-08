import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Config } from './config.entity';
import { ConfigRepository } from './config.repository';

@Injectable()
export class ConfigService {
  constructor(
    @InjectRepository(ConfigRepository)
    private readonly configRepository: ConfigRepository,
  ) {}

  // 블로그 환경설정 정보를 조회한다.
  async getConfig(): Promise<Config> {
    return await this.configRepository.getConfig();
  }
  
}
