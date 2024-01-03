import { PostCategoryEntity } from "@/category/models";
import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { SearchPostDto } from "@/post/models";
import { PaginationDto } from "@/shared/models";
import { Brackets, DeleteResult, Repository } from "typeorm";
import { SavePostTagDto, PostTagEntity } from "../models";

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
            .orWhere(caseSensitive + "post.cont LIKE :cont", { cont: `%${searchPostDto.q}%` })
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
          qb.where(caseSensitive + "post.cont LIKE :cont", { cont: `%${searchPostDto.q}%` });
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
        .andWhere("post.secret_yn = 'N'")
    }

    query = query
      .andWhere("post.tmp_yn = 'N'")
      .groupBy("post.id")
        .addGroupBy("tag.id")
      .orderBy("post.reg_date", "DESC")
      .limit(paginationDto.pageSize)
      .offset(paginationDto.getSkipSize());

    return await query.getMany();
  }

  /** 포스트 태그를 등록/수정한다. */
  async savePostTag(savePostTagDto: SavePostTagDto): Promise<PostTagEntity> {
    return await this.save(savePostTagDto);
  }

  /** 포스트 태그를 삭제한다. */
  async removePostTag(savePostTagDto: SavePostTagDto): Promise<DeleteResult> {
    return await this.createQueryBuilder('postTag')
      .delete()
      .where("post_id = :post_id", { post_id: savePostTagDto.postId })
      .execute();
  }

}
