import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { ListCategoryDto, SaveCategoryDto, CategoryEntity } from '../models';
import { CategoryRepository } from '../repositories/category.repository';
import { TagRepository } from '@/tag/repositories/tag.repository';
import { ListTagDto, TagEntity } from '@/tag/models';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
    @InjectRepository(TagRepository)
    private readonly tagRepository: TagRepository,
  ) {}

  /** 카테고리 목록을 조회한다. */
  async listCategory(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.listCategory();
  }

  /** 카테고리, 태그 목록 및 개수를 조회한다. */
  async listCategoryAndCount(listCategoryDto: ListCategoryDto): Promise<[CategoryEntity[], TagEntity[]]> {
    return await Promise.all([
      this.categoryRepository.listCategoryAndCount(listCategoryDto),
      this.tagRepository.listTagAndCount(listCategoryDto as ListTagDto),
    ]);
  }

  /** 카테고리를 조회한다. */
  async getCategory(id: number): Promise<CategoryEntity> {
    return await this.categoryRepository.getCategory(id);
  }

  /** 카테고리를 등록/수정한다. */
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
