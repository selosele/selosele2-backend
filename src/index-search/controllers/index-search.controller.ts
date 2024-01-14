import { Controller, Logger, NotFoundException, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IndexSearchService } from '../services/index-search.service';
import { Ip } from '@/shared/decorators';

@Controller('indexsearch')
@ApiTags('검색 및 색인 API')
export class IndexSearchController {

  private readonly logger = new Logger(IndexSearchController.name);

  constructor(
    private readonly indexSearchService: IndexSearchService,
  ) {}

  @Post()
  @ApiOperation({
    summary: '검색 데이터 저장 API',
    description: '검색 데이터를 저장한다.',
  })
  async saveIndexSearch(
    @Ip() ip: string
  ): Promise<void> {
    this.logger.warn(`Try to saveIndexSearch... ip : ${ip}`);

    // 로컬에서만 호출될 수 있도록 한다.
    if (ip !== '127.0.0.1') {
      throw new NotFoundException();
    }
    await this.indexSearchService.saveIndexSearch();
  }

}
