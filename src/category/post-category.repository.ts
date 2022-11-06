import { CustomRepository } from "src/configs/CustomRepository";
import { SearchPostDto } from "src/post/dto/search-post.dto";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { PostTag } from "src/tag/post-tag.entity";
import { Repository } from "typeorm";
import { PostCategory } from "./post-category.entity";

@CustomRepository(PostCategory)
export class PostCategoryRepository extends Repository<PostCategory> {

  // 포스트 목록 조회 시 카테고리를 조회한다.
  async listPostCategory(paginationDto: PaginationDto): Promise<PostCategory[]> {
    let query = this.createQueryBuilder('postCategory')
      .leftJoin("postCategory.post", "post", "post.id = postCategory.post_id")
      .leftJoinAndSelect("postCategory.category", "category", "category.id = postCategory.category_id")

    query = query
      .groupBy("post.id")
      .addGroupBy("category.id")
      .orderBy("post.reg_date", "DESC")
      .limit(paginationDto.pageSize)
      .offset(paginationDto.getSkipSize());

    return query.getMany();
  }

  // 포스트 검색 시 카테고리를 조회한다.
  async listPostCategorySearch(
    searchPostDto: SearchPostDto,
    paginationDto: PaginationDto
  ): Promise<PostCategory[]> {
    let query = this.createQueryBuilder('postCategory')
      .leftJoin("postCategory.post", "post", "post.id = postCategory.post_id")
      .leftJoin(PostTag, "postTag", "postTag.post_id = post.id")
      .leftJoinAndSelect("postCategory.category", "category", "category.id = postCategory.category_id")
      .leftJoinAndSelect("postTag.tag", "tag", "tag.id = postTag.tag_id")

    const caseSensitive = 'Y' === searchPostDto.c ? 'BINARY ' : '';

    // 전체 검색
    if ('001' === searchPostDto.t) {
      query = query
        .where(caseSensitive + "post.title LIKE :title", { title: `%${searchPostDto.q}%` })
          .orWhere(caseSensitive + "post.raw_text LIKE :raw_text", { raw_text: `%${searchPostDto.q}%` })
          .orWhere(caseSensitive + "category.nm LIKE :nm", { nm: `%${searchPostDto.q}%` })
          .orWhere(caseSensitive + "tag.nm LIKE :nm", { nm: `%${searchPostDto.q}%` })
    }
    
    // 제목으로 검색
    if ('002' === searchPostDto.t) {
      query = query
        .where(caseSensitive + "post.title LIKE :title", { title: `%${searchPostDto.q}%` })
    }

    // 내용으로 검색
    if ('003' === searchPostDto.t) {
      query = query
        .where(caseSensitive + "post.raw_text LIKE :raw_text", { raw_text: `%${searchPostDto.q}%` })
    }

    // 카테고리로 검색
    if ('004' === searchPostDto.t) {
      query = query
        .where(caseSensitive + "category.nm LIKE :nm", { nm: `%${searchPostDto.q}%` })
    }

    // 태그로 검색
    if ('005' === searchPostDto.t) {
      query = query
        .where(caseSensitive + "tag.nm LIKE :nm", { nm: `%${searchPostDto.q}%` })
    }

    query = query
      .groupBy("post.id")
      .addGroupBy("category.id")
      .orderBy("post.reg_date", "DESC")
      .limit(paginationDto.pageSize)
      .offset(paginationDto.getSkipSize());

    return query.getMany();
  }

}
