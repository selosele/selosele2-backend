import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { PostEntity } from '@/post/models';
import { DeleteResult, Repository } from 'typeorm';
import { ListCategoryDto, SaveCategoryDto, CategoryEntity, PostCategoryEntity } from '../models';

@CustomRepository(CategoryEntity)
export class CategoryRepository extends Repository<CategoryEntity> {

  /** 카테고리 목록을 조회한다. */
  async listCategory(): Promise<CategoryEntity[]> {
    return await this.find({
      order: {
        nm: 'ASC',
      },
    });
  }

  /** 카테고리 목록 및 개수를 조회한다. */
  async listCategoryAndCount(listCategoryDto: ListCategoryDto): Promise<CategoryEntity[]> {
    let query = this.createQueryBuilder('category')
      .select("COUNT(*)", "count")
        .addSelect("category.id", "id")
        .addSelect("category.nm", "nm")
      .leftJoin(PostCategoryEntity, "postCategory", "category.id = postCategory.category_id")
      .leftJoin(PostEntity, "post", "postCategory.post_id = post.id")
      .where("post.tmp_yn = 'N'");

    if ('N' === listCategoryDto?.isLogin) {
      query = query
        .andWhere("post.secret_yn = 'N'");
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

  /** 카테고리를 등록/수정한다. */
  async saveCategory(saveCategoryDto: SaveCategoryDto): Promise<CategoryEntity> {
    return await this.save(saveCategoryDto);
  }

  /** 카테고리를 삭제한다. */
  async removeCategory(id: number): Promise<DeleteResult> {
    return await this.delete(id);
  }

  /** 카테고리-포스트 계층형 구조를 조회한다. */
  async listTreeCategoryAndPost(): Promise<CategoryEntity[]> {
    return await this.createQueryBuilder('category')
      .leftJoinAndSelect("category.postCategory", "postCategory")
      .leftJoinAndSelect("postCategory.post", "post")
      .orderBy("COUNT(postCategory.category_id) OVER (PARTITION BY postCategory.category_id)", "DESC")
        .addOrderBy("post.reg_date", "DESC")
      .getMany();
  }

}
