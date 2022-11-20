import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './category.repository';
import { ListCategoryDto } from './dto/list-category.dto';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  // 카테고리 목록 및 개수를 조회한다.
  async listCategoryAndCount(listCategoryDto: ListCategoryDto): Promise<CategoryEntity[]> {
    return await this.categoryRepository.listCategoryAndCount(listCategoryDto);
  }

}
