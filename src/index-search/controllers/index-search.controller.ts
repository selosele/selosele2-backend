import { Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IndexSearchService } from '../services/index-search.service';
import { Auth, Ip } from '@/shared/decorators';
import { Roles } from '@/auth/models';
import { CountIndexSearchStatResponseDto } from '../models';

@Controller('indexsearch')
@ApiTags('검색 색인 API')
export class IndexSearchController {

  private readonly logger = new Logger(IndexSearchController.name);

  constructor(
    private readonly indexSearchService: IndexSearchService,
  ) {}

  @Post()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '검색 데이터 색인 API',
    description: '검색 데이터를 색인한다.',
  })
  async saveSearchData(
    @Ip() ip: string
  ): Promise<void> {
    this.logger.warn(`Try to saveSearchData... ip : ${ip}`);

    await this.indexSearchService.saveIndexSearch('N');
  }

  @Get('stat')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '유형별 검색 데이터 개수 조회 API',
    description: '유형별 검색 데이터 개수를 조회한다.'
  })
  @ApiCreatedResponse({
    type: CountIndexSearchStatResponseDto,
    description: '유형별 검색 데이터 개수',
  })
  async countPostStat(): Promise<CountIndexSearchStatResponseDto> {
    return await this.indexSearchService.countIndexSearchStat();
  }

}
