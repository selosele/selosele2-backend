import { IndexSearchService } from '@/index-search/services/index-search.service';
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {

  private readonly logger = new Logger(CronService.name);

  constructor(
    private readonly indexSearchService: IndexSearchService,
  ) {}

  /**
   * 검색 데이터 색인
   *   - 매주 월요일 자정에 실행
   */
  @Cron('0 0 * * 1')
  async saveSearchData(): Promise<void> {
    this.logger.warn(`============== 검색 데이터 색인 cron 시작 ==============`);
    await this.indexSearchService.saveIndexSearch();
    this.logger.warn(`============== 검색 데이터 색인 cron 종료 ==============`);
  }

}