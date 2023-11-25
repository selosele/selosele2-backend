import { Controller, Get, Post, Put, Body, ParseIntPipe } from '@nestjs/common';
import { Delete, Param } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { Roles } from 'src/auth/models';
import { Auth, IsAuthenticated } from 'src/shared/decorators';
import { DeleteResult } from 'typeorm';
import { ListCategoryDto, SaveCategoryDto, CategoryDto, CategoryEntity } from '../models';
import { CategoryService } from '../services/category.service';
import { TagDto, TagEntity } from 'src/tag/models';
import { serialize } from 'src/shared/utils';

@Controller('category')
@ApiTags('카테고리 API')
export class CategoryController {

  constructor(
    private readonly categoryService: CategoryService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '카테고리 목록 조회 API',
    description: '카테고리 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<CategoryDto>,
    description: '카테고리 DTO 목록',
  })
  async listCategory(): Promise<CategoryDto[]> {
    const categories: CategoryEntity[] = await this.categoryService.listCategory();
    
    return serialize<CategoryDto[]>(categories);
  }

  @Get('list/count')
  @ApiOperation({
    summary: '카테고리, 태그 목록 및 개수 조회 API',
    description: '카테고리, 태그 목록 및 개수를 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<[CategoryDto, TagDto]>,
    description: '카테고리 DTO 목록, 태그 DTO 목록',
  })
  async listCategoryAndCount(
    @IsAuthenticated() isAuthenticated: boolean
  ): Promise<[CategoryDto[], TagDto[]]> {
    const listCategoryDto = Builder(ListCategoryDto)
                            .isLogin(isAuthenticated ? 'Y' : 'N')
                            .build();

    const categoriesAndTags: [CategoryEntity[], TagEntity[]] = await this.categoryService.listCategoryAndCount(listCategoryDto);

    return [
      serialize<CategoryDto[]>(categoriesAndTags[0]),
      serialize<TagDto[]>(categoriesAndTags[1]),
    ];
  }

  @Get(':id')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '카테고리 조회 API',
    description: '카테고리를 조회한다.'
  })
  @ApiCreatedResponse({
    type: CategoryDto,
    description: '카테고리 DTO',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '카테고리 ID',
  })
  async getCategory(
    @Param('id', ParseIntPipe) id: number
  ): Promise<CategoryDto> {
    const category: CategoryEntity = await this.categoryService.getCategory(id);

    return serialize<CategoryDto>(category);
  }

  @Post()
  @ApiOperation({
    summary: '카테고리 등록 API',
    description: '카테고리를 등록한다.',
  })
  @ApiCreatedResponse({
    type: CategoryDto,
    description: '카테고리 DTO',
  })
  @ApiBody({
    type: SaveCategoryDto,
    description: '카테고리 등록/수정 DTO',
  })
  async addCategory(
    @Body(ValidationPipe) saveCategoryDto: SaveCategoryDto
  ): Promise<CategoryDto> {
    const category: CategoryEntity = await this.categoryService.saveCategory(saveCategoryDto);

    return serialize<CategoryDto>(category);
  }

  @Put()
  @ApiOperation({
    summary: '카테고리 수정 API',
    description: '카테고리를 수정한다.',
  })
  @ApiCreatedResponse({
    type: CategoryDto,
    description: '카테고리 DTO',
  })
  @ApiBody({
    type: SaveCategoryDto,
    description: '카테고리 등록/수정 DTO',
  })
  async updateCategory(
    @Body(ValidationPipe) saveCategoryDto: SaveCategoryDto
  ): Promise<CategoryDto> {
    const category: CategoryEntity = await this.categoryService.saveCategory(saveCategoryDto);

    return serialize<CategoryDto>(category);
  }

  @Delete(':id')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '카테고리 삭제 API',
    description: '카테고리를 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '카테고리 삭제 정보',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '카테고리 ID',
  })
  async removeCategory(
    @Param('id', ParseIntPipe) id: number
  ): Promise<DeleteResult> {
    return await this.categoryService.removeCategory(id);
  }

  @Get('list/tree')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '카테고리-포스트 계층형 구조 조회 API',
    description: '카테고리-포스트 계층형 구조를 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<CategoryDto>,
    description: '카테고리 DTO 목록',
  })
  async listTreeCategoryAndPost(): Promise<CategoryDto[]> {
    const categories: CategoryEntity[] = await this.categoryService.listTreeCategoryAndPost();

    return serialize<CategoryDto[]>(categories);
  }

}
