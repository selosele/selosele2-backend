import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Param, UseGuards } from '@nestjs/common/decorators';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { RoleEnum } from 'src/auth/role.entity';
import { IsAuthenticated } from 'src/shared/decorator/auth/is-authenticated.decorator';
import { Roles } from 'src/shared/decorator/auth/roles.decorator';
import { JwtAuthGuard } from 'src/shared/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guard/role.guard';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';
import { ListCategoryDto } from './dto/list-category.dto';

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
