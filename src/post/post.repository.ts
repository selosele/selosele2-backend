import { Category } from 'src/category/category.entity';
import { PostCategory } from 'src/category/post-category.entity';
import { CustomRepository } from 'src/configs/CustomRepository';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { PostTag } from 'src/tag/post-tag.entity';
import { Tag } from 'src/tag/tag.entity';
import { Repository } from 'typeorm';
import { SearchPostDto } from './dto/search-post.dto';
import { Post } from './post.entity';

@CustomRepository(Post)
export class PostRepository extends Repository<Post> {

  // 개수별 포스트 목록을 조회한다.
  async listPostByLimit(limit: number): Promise<Post[]> {
    return await this.find({
      select: {
        cont: false,
        rawText: false,
      },
      order: {
        regDate: 'DESC',
      },
      take: limit,
    });
  }

  // 포스트를 검색한다.
  async listPostSearch(searchPostDto: SearchPostDto): Promise<Post[]> {
    let query = this.createQueryBuilder('post')
      .select("post.id", "id")
        .distinct(true)
      .addSelect("post.title", "title")
      .addSelect("post.reg_date", "regDate")
      .addSelect("SUBSTR(post.raw_text, 1, 180)", "rawText")
      .addSelect("post.og_img_url", "ogImgUrl")

    // 전체 검색
    if ('001' === searchPostDto.t) {
      query = query
        .leftJoin(PostCategory, "post_category", "post_category.post_id = post.id")
        .leftJoin(Category, "category", "category.id = post_category.category_id")
        .leftJoin(PostTag, "post_tag", "post_tag.post_id = post.id")
        .leftJoin(Tag, "tag", "tag.id = post_tag.tag_id")
        .where("post.title LIKE :title", { title: `%${searchPostDto.q}%` })
        .orWhere("post.raw_text LIKE :raw_text", { raw_text: `%${searchPostDto.q}%` })
        .orWhere("category.nm LIKE :nm", { nm: `%${searchPostDto.q}%` })
        .orWhere("tag.nm LIKE :nm", { nm: `%${searchPostDto.q}%` })
    }
    
    // 제목으로 검색
    if ('002' === searchPostDto.t) {
      query = query
        .where("post.title LIKE :title", { title: `%${searchPostDto.q}%` })
    }

    // 내용으로 검색
    if ('003' === searchPostDto.t) {
      query = query
        .where("post.raw_text LIKE :raw_text", { raw_text: `%${searchPostDto.q}%` })
    }

    // 카테고리로 검색
    if ('004' === searchPostDto.t) {
      query = query
        .innerJoin(PostCategory, "post_category", "post_category.post_id = post.id")
        .innerJoin(Category, "category", "category.id = post_category.category_id")
        .where("category.nm LIKE :nm", { nm: `%${searchPostDto.q}%` })
    }

    // 태그로 검색
    if ('005' === searchPostDto.t) {
      query = query
        .innerJoin(PostTag, "post_tag", "post_tag.post_id = post.id")
        .innerJoin(Tag, "tag", "tag.id = post_tag.tag_id")
        .where("tag.nm LIKE :nm", { nm: `%${searchPostDto.q}%` })
    }

    query = query
      .orderBy("post.reg_date", "DESC");

    return await query.getRawMany();
  }

  // 포스트의 연도 및 개수를 조회한다.
  async listYearAndCount(): Promise<Post[]> {
    return await this.createQueryBuilder('post')
      .select("YEAR(reg_date)", "year")
        .distinct(true)
      .addSelect("COUNT('year')", "count")
      .groupBy("year")
      .orderBy("year", "DESC")
      .getRawMany();
  }

  // 연도별 포스트 목록을 조회한다.
  async listPostByYear(year: string, paginationDto: PaginationDto): Promise<[Post[], number]> {
    return await this.createQueryBuilder('post')
      .where("YEAR(reg_date) = :year", { year })
      .orderBy("reg_date", "DESC")
      .limit(paginationDto.pageSize)
      .offset(paginationDto.getSkipSize())
      .getManyAndCount();
  }

  // 카테고리별 포스트 목록을 조회한다.
  async listPostByCategory(categoryId: number, paginationDto: PaginationDto): Promise<[Post[], number]> {
    return await this.findAndCount({
      relations: {
        postCategory: {
          category: true,
        }
      },
      select: {
        postCategory: {
          postId: false,
          categoryId: true,
          category: {
            id: false,
            nm: true,
            regDate: false,
          },
        },
      },
      where: {
        postCategory: { categoryId },
      },
      order: {
        regDate: 'DESC',
      },
      take: paginationDto.pageSize,
      skip: paginationDto.getSkipSize(),
    });
  }

  // 태그별 포스트 목록을 조회한다.
  async listPostByTag(tagId: number, paginationDto: PaginationDto): Promise<[Post[], number]> {
    return await this.findAndCount({
      relations: {
        postTag: {
          tag: true,
        }
      },
      select: {
        postTag: {
          postId: false,
          tagId: true,
          tag: {
            id: false,
            nm: true,
            regDate: false,
          },
        },
      },
      where: {
        postTag: { tagId },
      },
      order: {
        regDate: 'DESC',
      },
      take: paginationDto.pageSize,
      skip: paginationDto.getSkipSize(),
    });
  }

}