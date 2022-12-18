import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './category.repository';
import { ListCategoryDto } from './dto/list-category.dto';
import { SaveCategoryDto } from './dto/save-category.dto';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  /** 카테고리 목록 및 개수를 조회한다. */
  async listCategoryAndCount(listCategoryDto: ListCategoryDto): Promise<CategoryEntity[]> {
    return await this.categoryRepository.listCategoryAndCount(listCategoryDto);
  }

  /** 카테고리를 조회한다. */
  async getCategory(id: number): Promise<CategoryEntity> {
    return await this.categoryRepository.getCategory(id);
  }

  /** 카테고리를 추가/수정한다. */
  async saveCategory(saveCategoryDto: SaveCategoryDto): Promise<CategoryEntity> {
    return await this.categoryRepository.saveCategory(saveCategoryDto);
  }

  /** 카테고리를 삭제한다. */
  async removeCategory(id: number): Promise<DeleteResult> {
    return await this.categoryRepository.removeCategory(id);
  }

  /** 카테고리-포스트 계층형 구조를 조회한다. */
  async listTreeCategoryAndPost(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.listTreeCategoryAndPost();
  }

}
