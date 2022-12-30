import { Controller, Get, Delete, UseGuards, Body, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RoleEnum } from 'src/auth/entities/role.entity';
import { Roles } from 'src/shared/decorator/auth/roles.decorator';
import { JwtAuthGuard } from 'src/shared/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guard/role.guard';
import { DeleteResult } from 'typeorm';
import { ContentEntity } from './entities/content.entity';
import { ContentService } from './content.service';
import { RemoveContentDto } from './dto/remove-content.dto';

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
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
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
