import { IndexSearchService } from "@/index-search/services/index-search.service";
import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";

@Injectable()
export class CronService {

  private readonly logger = new Logger(CronService.name);

  constructor(
    private readonly indexSearchService: IndexSearchService,
  ) {}

  /**
   * 검색 데이터 저장
   *   - 매일 밤 12시마다 실행
   */
  @Cron('0 0 0 * * *')
  async saveIndexSearch(): Promise<void> {
    this.logger.warn(`============== 검색 데이터 저장 cron 시작 ==============`);

    await this.indexSearchService.saveIndexSearch();

    this.logger.warn(`============== 검색 데이터 저장 cron 종료 ==============`);
  }

}