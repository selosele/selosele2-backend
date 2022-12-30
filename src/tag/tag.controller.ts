import { Controller, Get, Post, Put, Body, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Delete, Param, UseGuards } from '@nestjs/common/decorators';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { RoleEnum } from 'src/auth/entities/role.entity';
import { IsAuthenticated } from 'src/shared/decorators/auth/is-authenticated.decorator';
import { Roles } from 'src/shared/decorators/auth/roles.decorator';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { DeleteResult } from 'typeorm';
import { ListTagDto } from './dto/list-tag.dto';
import { SaveTagDto } from './dto/save-tag.dto';
import { TagEntity } from './entities/tag.entity';
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

  @Post()
  @ApiOperation({
    summary: '태그 추가 API',
    description: '태그를 추가한다.',
  })
  @ApiCreatedResponse({
    type: TagEntity,
    description: '태그를 추가한다.',
  })
  @ApiBody({
    type: SaveTagDto,
    description: '태그 추가/수정 DTO',
  })
  addCategory(@Body(ValidationPipe) saveTagDto: SaveTagDto): Promise<TagEntity> {
    return this.tagService.saveTag(saveTagDto);
  }

  @Put()
  @ApiOperation({
    summary: '태그 수정 API',
    description: '태그를 수정한다.',
  })
  @ApiCreatedResponse({
    type: TagEntity,
    description: '태그를 수정한다.',
  })
  @ApiBody({
    type: SaveTagDto,
    description: '태그 추가/수정 DTO',
  })
  saveTag(@Body(ValidationPipe) saveTagDto: SaveTagDto): Promise<TagEntity> {
    return this.tagService.saveTag(saveTagDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '태그 삭제 API',
    description: '태그를 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '태그를 삭제한다.',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '태그 ID',
  })
  removeTag(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.tagService.removeTag(id);
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
