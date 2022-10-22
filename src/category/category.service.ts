import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  // 카테고리 목록 및 개수를 조회한다.
  async listCategoryAndCount(): Promise<Category[]> {
    return await this.categoryRepository.listCategoryAndCount();
  }

}
