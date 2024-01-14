import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Auth } from '@/shared/decorators';
import { Roles } from '@/auth/models';
import { IndexSearchLogDto } from '../models/dto/index-search-log.dto';
import { serialize } from '@/shared/utils';
import { IndexSearchLogService } from '../services/index-search-log.service';
import { IndexSearchLogEntity } from '../models';

@Controller('indexsearchlog')
@ApiTags('검색 색인 로그 API')
export class IndexSearchLogController {

  constructor(
    private readonly indexSearchLogService: IndexSearchLogService,
  ) {}

  @Get()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '검색 색인 로그 목록 조회 API',
    description: '검색 색인 로그 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Array<IndexSearchLogDto>,
    description: '검색 색인 로그 DTO 목록',
  })
  async listIndexSearchLog(): Promise<IndexSearchLogDto[]> {
    const indexSearchLogs: IndexSearchLogEntity[] = await this.indexSearchLogService.listIndexSearchLog();

    return serialize<IndexSearchLogDto[]>(indexSearchLogs);
  }

}
