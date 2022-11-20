import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { IsAuthenticated } from 'src/shared/decorator/auth/is-authenticated.decorator';
import { ListTagDto } from './dto/list-tag.dto';
import { TagEntity } from './tag.entity';
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
    type: TagEntity,
    description: '태그 목록 및 개수를 조회한다.',
  })
  listTagAndCount(@IsAuthenticated() isAuthenticated: boolean): Promise<TagEntity[]> {
    const listTagDto: ListTagDto = Builder(ListTagDto)
      .isLogin(isAuthenticated ? 'Y' : 'N')
      .build();
    return this.tagService.listTagAndCount(listTagDto);
  }

}
