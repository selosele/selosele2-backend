import { Controller, Get, Post, Put, Body, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Delete, Param } from '@nestjs/common/decorators';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/models';
import { Auth } from 'src/shared/decorators';
import { DeleteResult } from 'typeorm';
import { SaveTagDto, TagEntity } from '../models';
import { TagService } from '../services/tag.service';
import { TagDto } from '../models/dto/tag.dto';
import { serialize } from 'src/shared/utils';

@Controller('tag')
@ApiTags('태그 API')
export class TagController {

  constructor(
    private readonly tagService: TagService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '태그 목록 조회 API',
    description: '태그 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<TagDto>,
    description: '태그 DTO 목록',
  })
  async listTag(): Promise<TagDto[]> {
    const tags: TagEntity[] = await this.tagService.listTag();

    return serialize<TagDto[]>(tags);
  }

  @Get(':id')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '태그 조회 API',
    description: '태그를 조회한다.'
  })
  @ApiCreatedResponse({
    type: TagDto,
    description: '태그 DTO',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '태그 ID',
  })
  async getTag(
    @Param('id', ParseIntPipe) id: number
  ): Promise<TagDto> {
    const tag: TagEntity = await this.tagService.getTag(id);

    return serialize<TagDto>(tag);
  }

  @Post()
  @ApiOperation({
    summary: '태그 등록 API',
    description: '태그를 등록한다.',
  })
  @ApiCreatedResponse({
    type: TagDto,
    description: '태그 DTO',
  })
  @ApiBody({
    type: SaveTagDto,
    description: '태그 등록/수정 DTO',
  })
  async addCategory(
    @Body(ValidationPipe) saveTagDto: SaveTagDto
  ): Promise<TagDto> {
    const tag: TagEntity = await this.tagService.saveTag(saveTagDto);

    return serialize<TagDto>(tag);
  }

  @Put()
  @ApiOperation({
    summary: '태그 수정 API',
    description: '태그를 수정한다.',
  })
  @ApiCreatedResponse({
    type: TagDto,
    description: '태그 DTO',
  })
  @ApiBody({
    type: SaveTagDto,
    description: '태그 등록/수정 DTO',
  })
  async saveTag(
    @Body(ValidationPipe) saveTagDto: SaveTagDto
  ): Promise<TagDto> {
    const tag: TagEntity = await this.tagService.saveTag(saveTagDto);

    return serialize<TagDto>(tag);
  }

  @Delete(':id')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '태그 삭제 API',
    description: '태그를 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '태그 삭제 정보',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '태그 ID',
  })
  async removeTag(
    @Param('id', ParseIntPipe) id: number
  ): Promise<DeleteResult> {
    return await this.tagService.removeTag(id);
  }

  @Get('list/tree')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '태그-포스트 계층형 구조 조회 API',
    description: '태그-포스트 계층형 구조를 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<TagDto>,
    description: '태그 DTO 목록',
  })
  async listTreeTagAndPost(): Promise<TagDto[]> {
    const tags: TagEntity[] = await this.tagService.listTreeTagAndPost();

    return serialize<TagDto[]>(tags);
  }

}
