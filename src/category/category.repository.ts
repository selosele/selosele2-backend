import { CustomRepository } from 'src/configs/CustomRepository';
import { Post } from 'src/post/post.entity';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { ListCategoryDto } from './dto/list-category.dto';
import { PostCategory } from './post-category.entity';

@CustomRepository(Category)
export class CategoryRepository extends Repository<Category> {

  // 카테고리 목록 및 개수를 조회한다.
  async listCategoryAndCount(listCategoryDto: ListCategoryDto): Promise<Category[]> {
    let query = this.createQueryBuilder('category')
      .select("COUNT(*)", "count")
        .addSelect("category.id", "id")
        .addSelect("category.nm", "nm")
      .innerJoin(PostCategory, "postCategory", "category.id = postCategory.category_id")
      .innerJoin(Post, "post", "postCategory.post_id = post.id");

    if ('N' === listCategoryDto?.isLogin) {
      query = query
        .where("post.secret_yn = 'N'");
    }

    query = query
      .groupBy("category.id")
        .addGroupBy("category.nm")
      .orderBy("count", "DESC");

    return await query.getRawMany();
  }

}
