import { Controller, Get, Post, Put, Body, ParseIntPipe } from '@nestjs/common';
import { Delete, Param, UseGuards } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { RoleEnum } from 'src/auth/entities/role.entity';
import { IsAuthenticated } from 'src/shared/decorators/auth/is-authenticated.decorator';
import { Roles } from 'src/shared/decorators/auth/roles.decorator';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { DeleteResult } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';
import { CategoryService } from './category.service';
import { ListCategoryDto } from './dto/list-category.dto';
import { SaveCategoryDto } from './dto/save-category.dto';

@Controller('api/category')
@ApiTags('카테고리 API')
export class CategoryController {

  constructor(
    private readonly categoryService: CategoryService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '카테고리 목록 및 개수 조회 API',
    description: '카테고리 목록 및 개수를 조회한다.'
  })
  @ApiCreatedResponse({
    type: CategoryEntity,
    description: '카테고리 목록 및 개수를 조회한다.',
  })
  listCategoryAndCount(@IsAuthenticated() isAuthenticated: boolean): Promise<CategoryEntity[]> {
    const listCategoryDto: ListCategoryDto = Builder(ListCategoryDto)
      .isLogin(isAuthenticated ? 'Y' : 'N')
      .build();
    return this.categoryService.listCategoryAndCount(listCategoryDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '카테고리 조회 API',
    description: '카테고리를 조회한다.'
  })
  @ApiCreatedResponse({
    type: CategoryEntity,
    description: '카테고리를 조회한다.',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '카테고리 ID',
  })
  getCategory(@Param('id', ParseIntPipe) id: number): Promise<CategoryEntity> {
    return this.categoryService.getCategory(id);
  }

  @Post()
  @ApiOperation({
    summary: '카테고리 추가 API',
    description: '카테고리를 추가한다.',
  })
  @ApiCreatedResponse({
    type: CategoryEntity,
    description: '카테고리를 추가한다.',
  })
  @ApiBody({
    type: SaveCategoryDto,
    description: '카테고리 추가/수정 DTO',
  })
  addCategory(@Body(ValidationPipe) saveCategoryDto: SaveCategoryDto): Promise<CategoryEntity> {
    return this.categoryService.saveCategory(saveCategoryDto);
  }

  @Put()
  @ApiOperation({
    summary: '카테고리 수정 API',
    description: '카테고리를 수정한다.',
  })
  @ApiCreatedResponse({
    type: CategoryEntity,
    description: '카테고리를 수정한다.',
  })
  @ApiBody({
    type: SaveCategoryDto,
    description: '카테고리 추가/수정 DTO',
  })
  updateCategory(@Body(ValidationPipe) saveCategoryDto: SaveCategoryDto): Promise<CategoryEntity> {
    return this.categoryService.saveCategory(saveCategoryDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '카테고리 삭제 API',
    description: '카테고리를 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '카테고리를 삭제한다.',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '카테고리 ID',
  })
  removeCategory(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.categoryService.removeCategory(id);
  }

  @Get('list/tree')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '카테고리-포스트 계층형 구조 조회 API',
    description: '카테고리-포스트 계층형 구조를 조회한다.'
  })
  @ApiCreatedResponse({
    type: CategoryEntity,
    description: '카테고리-포스트 계층형 구조를 조회한다.',
  })
  listTreeCategoryAndPost(): Promise<CategoryEntity[]> {
    return this.categoryService.listTreeCategoryAndPost();
  }

}
