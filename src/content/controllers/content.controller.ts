import { Controller, Get, Delete, UseGuards, Body, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RoleEnum } from 'src/auth/models';
import { Auth, Roles } from 'src/shared/decorators';
import { JwtAuthGuard, RoleGuard } from 'src/shared/guards';
import { DeleteResult } from 'typeorm';
import { RemoveContentDto, ContentEntity } from '../models';
import { ContentService } from '../services/content.service';

@Controller('api/content')
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

  @Delete()
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
