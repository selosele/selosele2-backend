import { Brackets, DeleteResult, Repository } from 'typeorm';
import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { SavePostCategoryDto, PostCategoryEntity } from '../models';
import { ListPostDto, SearchPostDto } from '@/post/models';
import { PaginationDto } from '@/shared/models';
import { searchCodes } from '@/index-search/models';

@CustomRepository(PostCategoryEntity)
export class PostCategoryRepository extends Repository<PostCategoryEntity> {

  /** 포스트 목록 조회 시 카테고리를 조회한다. */
  async listPostCategory(listPostDto: ListPostDto): Promise<PostCategoryEntity[]> {
    let query = this.createQueryBuilder('postCategory')
      .leftJoin("postCategory.post", "post")
      .leftJoinAndSelect("postCategory.category", "category")
      .where("post.tmp_yn = 'N'");

    if ('N' === listPostDto?.isLogin) {
      query = query
        .andWhere("post.secret_yn = 'N'");
    }

    query = query
      .groupBy("post.id")
        .addGroupBy("postCategory.post_id")
        .addGroupBy("postCategory.category_id")
      .orderBy("post.reg_date", "DESC");

    return await query.getMany();
  }

  /** 포스트 검색 시 카테고리를 조회한다. */
  async listPostCategorySearch(
    searchPostDto: SearchPostDto,
    paginationDto: PaginationDto
  ): Promise<PostCategoryEntity[]> {
    let query = this.createQueryBuilder('postCategory')
      .leftJoin("postCategory.post", "post")
      .leftJoinAndSelect("postCategory.category", "category")

    /**
     * 검색어 목록
     *   - 검색어를 한칸 띄어쓰기 기준으로 배열을 만들어서 다중 검색이 되도록 한다.
     */
    const searchQueries = searchPostDto.q.split(' ');

    /** 대소문자 구분 여부 */
    const caseSensitive = ('Y' === searchPostDto.c) ? 'BINARY ' : '';

    // 전체 검색
    if (searchCodes.SEARCH_ALL.val === searchPostDto.t) {
      query = query
        .where(new Brackets(qb => {
          searchQueries.forEach(q => {
            qb.orWhere(caseSensitive + `post.title LIKE '%${q}%'`)
              .orWhere(caseSensitive + `post.cont LIKE '%${q}%'`)
              .orWhere(caseSensitive + `category.nm LIKE '%${q}%'`);
          });
        }));
    }
    
    // 제목으로 검색
    if (searchCodes.SEARCH_TITLE.val === searchPostDto.t) {
      query = query
        .andWhere(new Brackets(qb => {
          searchQueries.forEach(q => {
            qb.orWhere(caseSensitive + `post.title LIKE '%${q}%'`);
          });
        }));
    }

    // 내용으로 검색
    if (searchCodes.SEARCH_CONTENT.val === searchPostDto.t) {
      query = query
        .where(new Brackets(qb => {
          searchQueries.forEach(q => {
            qb.orWhere(caseSensitive + `post.cont LIKE '%${q}%'`);
          });
        }));
    }

    // 카테고리로 검색
    if (searchCodes.SEARCH_CATEGORY.val === searchPostDto.t) {
      query = query
        .where(new Brackets(qb => {
          searchQueries.forEach(q => {
            qb.orWhere(caseSensitive + `category.nm LIKE '%${q}%'`);
          });
        }));
    }

    if ('N' === searchPostDto?.isLogin) {
      query = query
        .andWhere("post.secret_yn = 'N'");
    }

    query = query
      .andWhere("post.tmp_yn = 'N'")
      .groupBy("post.id")
        .addGroupBy("postCategory.post_id")
        .addGroupBy("postCategory.category_id")
      .orderBy("post.reg_date", "DESC")
      .limit(paginationDto.pageSize)
      .offset(paginationDto.getSkipSize());

    return await query.getMany();
  }

  /** 포스트 카테고리를 등록/수정한다. */
  async savePostCategory(savePostCategoryDto: SavePostCategoryDto): Promise<PostCategoryEntity> {
    return await this.save(savePostCategoryDto);
  }

  /** 포스트 카테고리를 삭제한다. */
  async removePostCategory(savePostCategoryDto: SavePostCategoryDto): Promise<DeleteResult> {
    return await this.createQueryBuilder('postCategory')
      .delete()
      .where("post_id = :post_id", { post_id: savePostCategoryDto.postId })
      .execute();
  }

}
