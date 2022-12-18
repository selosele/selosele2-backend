import { CustomRepository } from 'src/configs/CustomRepository';
import { PostEntity } from 'src/post/post.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { ListCategoryDto } from './dto/list-category.dto';
import { PostCategoryEntity } from './post-category.entity';

@CustomRepository(CategoryEntity)
export class CategoryRepository extends Repository<CategoryEntity> {

  /** 카테고리 목록 및 개수를 조회한다. */
  async listCategoryAndCount(listCategoryDto: ListCategoryDto): Promise<CategoryEntity[]> {
    let query = this.createQueryBuilder('category')
      .select("COUNT(*)", "count")
        .addSelect("category.id", "id")
        .addSelect("category.nm", "nm")
      .innerJoin(PostCategoryEntity, "postCategory", "category.id = postCategory.category_id")
      .innerJoin(PostEntity, "post", "postCategory.post_id = post.id");

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

  /** 카테고리를 조회한다. */
  async getCategory(id: number): Promise<CategoryEntity> {
    return await this.findOne({
      where: { id },
    });
  }

  /** 카테고리-포스트 계층형 구조를 조회한다. */
  async listTreeCategoryAndPost(): Promise<CategoryEntity[]> {
    return await this.createQueryBuilder('category')
      .leftJoinAndSelect("category.postCategory", "postCategory")
      .leftJoinAndSelect("postCategory.post", "post")
      .orderBy("postCategory.category_id")
        .addOrderBy("post.reg_date", "DESC")
      .getMany();
  }

}
