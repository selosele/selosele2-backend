import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Param, UseGuards } from '@nestjs/common/decorators';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { RoleEnum } from 'src/auth/role.entity';
import { IsAuthenticated } from 'src/shared/decorator/auth/is-authenticated.decorator';
import { Roles } from 'src/shared/decorator/auth/roles.decorator';
import { JwtAuthGuard } from 'src/shared/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guard/role.guard';
import { ListTagDto } from './dto/list-tag.dto';
import { TagEntity } from './tag.entity';
import { TagService } from './tag.service';

@Controller('api/tag')
@ApiTags('태그 API')
export class TagController {

  constructor(
    private readonly tagService: TagService,
  ) {}

  @Get()
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

  @Get(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '태그 조회 API',
    description: '태그를 조회한다.'
  })
  @ApiCreatedResponse({
    type: TagEntity,
    description: '태그를 조회한다.',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '태그 ID',
  })
  getCategory(@Param('id', ParseIntPipe) id: number): Promise<TagEntity> {
    return this.tagService.getTag(id);
  }

  @Get('list/tree')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '태그-포스트 계층형 구조 조회 API',
    description: '태그-포스트 계층형 구조를 조회한다.'
  })
  @ApiCreatedResponse({
    type: TagEntity,
    description: '태그-포스트 계층형 구조를 조회한다.',
  })
  listTreeTagAndPost(): Promise<TagEntity[]> {
    return this.tagService.listTreeTagAndPost();
  }

}
