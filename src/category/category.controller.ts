import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

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
    type: Category,
    description: '카테고리 목록 및 개수를 조회한다.',
  })
  listCategoryAndCount(): Promise<Category[]> {
    return this.categoryService.listCategoryAndCount();
  }

}
