import { Controller, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IndexSearchService } from '../services/index-search.service';
import { Auth, Ip } from '@/shared/decorators';
import { Roles } from '@/auth/models';
import { RecommendSearchKeywordService } from '../services/recommend-search-keyword.service';

@Controller('indexsearch')
@ApiTags('검색 색인 API')
export class IndexSearchController {

  private readonly logger = new Logger(IndexSearchController.name);

  constructor(
    private readonly indexSearchService: IndexSearchService,
    private readonly recommendSearchKeywordService: RecommendSearchKeywordService,
  ) {}

  @Post()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '검색 데이터 색인 API',
    description: '검색 데이터를 색인하고 추천 검색어 데이터를 저장한다.',
  })
  async saveSearchData(
    @Ip() ip: string
  ): Promise<void> {
    this.logger.warn(`Try to saveSearchData... ip : ${ip}`);

    await this.indexSearchService.saveIndexSearch('N');
    await this.recommendSearchKeywordService.saveRecommendSearchKeyword();
  }

}
