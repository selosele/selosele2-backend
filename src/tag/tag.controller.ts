import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';

@Controller('api/tag')
@ApiTags('태그 API')
export class TagController {

  constructor(
    private readonly tagService: TagService,
  ) {}

  @Get('list')
  @ApiOperation({
    summary: '태그 목록 및 개수 조회 API',
    description: '태그 목록 및 개수를 조회한다.'
  })
  @ApiCreatedResponse({
    type: Tag,
    description: '태그 목록 및 개수를 조회한다.',
  })
  listTagAndCount(): Promise<Tag[]> {
    return this.tagService.listTagAndCount();
  }

}
