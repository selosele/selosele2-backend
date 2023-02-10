import { Controller, Get, Body, ValidationPipe, Post, Param } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { RoleEnum } from 'src/auth/models';
import { Auth, IsAuthenticated } from 'src/shared/decorators';
import { DeleteResult } from 'typeorm';
import { RemoveContentDto, ContentEntity } from '../models';
import { GetContentDto } from '../models/dto/get-content.dto';
import { ContentService } from '../services/content.service';

@Controller('content')
@ApiTags('콘텐츠 API')
export class ContentController {

  constructor(
    private readonly contentService: ContentService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '콘텐츠 목록 조회 API',
    description: '콘텐츠 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: ContentEntity,
    description: '콘텐츠 목록을 조회한다.',
  })
  listContent(): Promise<ContentEntity[]> {
    return this.contentService.listContent();
  }

  @Get(':link')
  @ApiOperation({
    summary: '콘텐츠 상세 조회 API',
    description: '콘텐츠를 조회한다.'
  })
  @ApiCreatedResponse({
    type: ContentEntity,
    description: '콘텐츠를 조회한다.',
  })
  @ApiParam({
    type: String,
    name: 'link',
    description: '콘텐츠 링크',
  })
  getContent(
    @IsAuthenticated() isAuthenticated: boolean,
    @Param('link') link: string
  ): Promise<ContentEntity> {
    const getContentDto: GetContentDto = Builder(GetContentDto)
                                         .link(link)
                                         .isLogin(isAuthenticated ? 'Y' : 'N')
                                         .build();
    return this.contentService.getContent(getContentDto);
  }

  @Post('remove')
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '콘텐츠 다건 삭제 API',
    description: '콘텐츠 다건을 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '콘텐츠 다건을 삭제한다.',
  })
  @ApiBody({
    type: RemoveContentDto,
    description: '콘텐츠 삭제 DTO',
  })
  removeContents(@Body(ValidationPipe) removeContentDto: RemoveContentDto[]): Promise<DeleteResult> {
    return this.contentService.removeContents(removeContentDto);
  }

}
