import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { PostCategory } from './post-category.entity';

@CustomRepository(Category)
export class CategoryRepository extends Repository<Category> {

  // 카테고리 목록 및 개수를 조회한다.
  async listCategoryAndCount(): Promise<Category[]> {
    return await this.createQueryBuilder('category')
      .select("COUNT(*)", "count")
        .addSelect("category.id", "id")
        .addSelect("category.nm", "nm")
      .innerJoin(PostCategory, "postCategory", "category.id = postCategory.category_id")
      .groupBy("category.id")
        .addGroupBy("category.nm")
      .orderBy("count", "DESC")
      .getRawMany();
  }

}
