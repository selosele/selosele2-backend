import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { PostCategory } from './post-category.entity';

@CustomRepository(Category)
export class CategoryRepository extends Repository<Category> {

  // 카테고리 목록 및 개수를 조회한다.
  async listCategoryAndCount(): Promise<Category[]> {
    return await this.createQueryBuilder('category')
      .select([
        'COUNT(*) AS count',
        'category.id AS id',
        'category.nm AS nm',
      ])
      .innerJoin(PostCategory, 'post_category', 'category.id = post_category.category_id')
      .groupBy('category.id')
      .addGroupBy('category.nm')
      .orderBy('count', 'DESC')
      .getRawMany();
  }

}
