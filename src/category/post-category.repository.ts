import { CustomRepository } from "src/configs/CustomRepository";
import { ListPostDto } from "src/post/dto/list-post.dto";
import { SearchPostDto } from "src/post/dto/search-post.dto";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { PostTagEntity } from "src/tag/post-tag.entity";
import { Brackets, Repository } from "typeorm";
import { PostCategoryEntity } from "./post-category.entity";

@CustomRepository(PostCategoryEntity)
export class PostCategoryRepository extends Repository<PostCategoryEntity> {

  // 포스트 목록 조회 시 카테고리를 조회한다.
  async listPostCategory(listPostDto: ListPostDto): Promise<PostCategoryEntity[]> {
    let query = this.createQueryBuilder('postCategory')
      .leftJoin("postCategory.post", "post", "post.id = postCategory.post_id")
      .leftJoinAndSelect("postCategory.category", "category", "category.id = postCategory.category_id");

    if ('N' === listPostDto?.isLogin) {
      query = query
        .where("post.secret_yn = :secret_yn", { secret_yn: 'N' });
    }

    query = query
      .groupBy("post.id")
        .addGroupBy("postCategory.post_id")
        .addGroupBy("postCategory.category_id")
      .orderBy("post.reg_date", "DESC");

    return await query.getMany();
  }

  // 포스트 검색 시 카테고리를 조회한다.
  async listPostCategorySearch(
    searchPostDto: SearchPostDto,
    paginationDto: PaginationDto
  ): Promise<PostCategoryEntity[]> {
    let query = this.createQueryBuilder('postCategory')
      .leftJoin("postCategory.post", "post", "post.id = postCategory.post_id")
      .leftJoin(PostTagEntity, "postTag", "postTag.post_id = post.id")
      .leftJoinAndSelect("postCategory.category", "category", "category.id = postCategory.category_id")
      .leftJoinAndSelect("postTag.tag", "tag", "tag.id = postTag.tag_id")

    const caseSensitive = 'Y' === searchPostDto.c ? 'BINARY ' : '';

    // 전체 검색
    if ('001' === searchPostDto.t) {
      query = query
        .where(new Brackets(qb => {
          qb.where(caseSensitive + "post.title LIKE :title", { title: `%${searchPostDto.q}%` })
            .orWhere(caseSensitive + "post.raw_text LIKE :raw_text", { raw_text: `%${searchPostDto.q}%` })
            .orWhere(caseSensitive + "category.nm LIKE :nm", { nm: `%${searchPostDto.q}%` })
            .orWhere(caseSensitive + "tag.nm LIKE :nm", { nm: `%${searchPostDto.q}%` })
        }));
    }
    
    // 제목으로 검색
    if ('002' === searchPostDto.t) {
      query = query
        .where(new Brackets(qb => {
          qb.where(caseSensitive + "post.title LIKE :title", { title: `%${searchPostDto.q}%` });
        }));
    }

    // 내용으로 검색
    if ('003' === searchPostDto.t) {
      query = query
        .where(new Brackets(qb => {
          qb.where(caseSensitive + "post.raw_text LIKE :raw_text", { raw_text: `%${searchPostDto.q}%` });
        }));
    }

    // 카테고리로 검색
    if ('004' === searchPostDto.t) {
      query = query
        .where(new Brackets(qb => {
          qb.where(caseSensitive + "category.nm LIKE :nm", { nm: `%${searchPostDto.q}%` });
        }));
    }

    // 태그로 검색
    if ('005' === searchPostDto.t) {
      query = query
        .where(new Brackets(qb => {
          qb.where(caseSensitive + "tag.nm LIKE :nm", { nm: `%${searchPostDto.q}%` });
        }));
    }

    if ('N' === searchPostDto?.isLogin) {
      query = query
        .andWhere("post.secret_yn = :secret_yn", { secret_yn: 'N' })
    }

    query = query
      .groupBy("post.id")
        .addGroupBy("postCategory.post_id")
        .addGroupBy("category.id")
      .orderBy("post.reg_date", "DESC")
      .limit(paginationDto.pageSize)
      .offset(paginationDto.getSkipSize());

    return await query.getMany();
  }

}
