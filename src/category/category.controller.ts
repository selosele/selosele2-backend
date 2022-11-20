import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { IsAuthenticated } from 'src/shared/decorator/auth/is-authenticated.decorator';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';
import { ListCategoryDto } from './dto/list-category.dto';

@Controller('api/category')
@ApiTags('카테고리 API')
export class CategoryController {

  constructor(
    private readonly categoryService: CategoryService,
  ) {}

  @Get('list')
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

}
