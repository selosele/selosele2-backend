import { PostCategoryEntity } from "src/category/post-category.entity";
import { CustomRepository } from "src/configs/CustomRepository";
import { SearchPostDto } from "src/post/dto/search-post.dto";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { Brackets, Repository } from "typeorm";
import { PostTagEntity } from "./post-tag.entity";

@CustomRepository(PostTagEntity)
export class PostTagRepository extends Repository<PostTagEntity> {

  /** 포스트 검색 시 태그를 조회한다. */
  async listPostTagSearch(
    searchPostDto: SearchPostDto,
    paginationDto: PaginationDto
  ): Promise<PostTagEntity[]> {
    let query = this.createQueryBuilder('postTag')
      .leftJoin("postTag.post", "post", "post.id = postTag.post_id")
      .leftJoin(PostCategoryEntity, "postCategory", "postCategory.post_id = post.id")
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
        .addGroupBy("tag.id")
      .orderBy("post.reg_date", "DESC")
      .limit(paginationDto.pageSize)
      .offset(paginationDto.getSkipSize());

    return await query.getMany();
  }

}
