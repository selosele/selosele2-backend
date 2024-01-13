import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IndexSearchService } from '../services/index-search.service';
import { Auth } from '@/shared/decorators';
import { Roles } from '@/auth/models';

@Controller('indexsearch')
@ApiTags('검색 및 색인 API')
export class IndexSearchController {

  constructor(
    private readonly indexSearchService: IndexSearchService,
  ) {}

  @Post()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '검색 데이터 저장 API',
    description: '검색 데이터를 저장한다.',
  })
  async saveIndexSearch(): Promise<void> {
    await this.indexSearchService.saveIndexSearch();
  }

}
