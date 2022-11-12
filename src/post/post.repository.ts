import { CustomRepository } from 'src/configs/CustomRepository';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Brackets, Repository } from 'typeorm';
import { ListPostDto } from './dto/list-post.dto';
import { SearchPostDto } from './dto/search-post.dto';
import { Post } from './post.entity';

@CustomRepository(Post)
export class PostRepository extends Repository<Post> {

  // 포스트 목록을 조회한다.
  async listPost(listPostDto: ListPostDto): Promise<[Post[], number]> {
    let query = this.createQueryBuilder('post')
      .select("post.id", "id")
        .addSelect("post.title", "title")
        .addSelect("post.reg_date", "regDate")
        .addSelect("post.like_cnt", "likeCnt")
        .addSelect("post.reply_cnt", "replyCnt")
        .addSelect("SUBSTR(post.raw_text, 1, 180)", "rawText")
        .addSelect("post.og_img_url", "ogImgUrl")
        .addSelect("post.secret_yn", "secretYn")
        .addSelect("post.pin_yn", "pinYn")
      .leftJoin("post.postCategory", "postCategory", "postCategory.post_id = post.id")
      .leftJoin("post.postTag", "postTag", "postTag.post_id = post.id");

    if ('N' === listPostDto?.isLogin) {
      query = query
        .where("post.secret_yn = 'N'");
    }

    query = query
      .groupBy("post.id")
      .orderBy("post.reg_date", "DESC");

    return await Promise.all([
      await query.getRawMany(),
      22
    ]);
  }

  // 개수별 포스트 목록을 조회한다.
  async listPostByLimit(listPostDto: ListPostDto): Promise<Post[]> {
    return await this.find({
      select: {
        cont: false,
        rawText: false,
      },
      where: {
        ...('N' === listPostDto?.isLogin && { secretYn: 'N' }),
      },
      order: {
        regDate: 'DESC',
      },
      take: listPostDto?.limit,
    });
  }

  // 포스트를 검색한다.
  async listPostSearch(
    searchPostDto: SearchPostDto,
    paginationDto: PaginationDto,
  ): Promise<[Post[], number]> {
    let query = this.createQueryBuilder('post')
      .select("post.id", "id")
        .addSelect("post.title", "title")
        .addSelect("post.reg_date", "regDate")
        .addSelect("post.like_cnt", "likeCnt")
        .addSelect("post.reply_cnt", "replyCnt")
        .addSelect("SUBSTR(post.raw_text, 1, 180)", "rawText")
        .addSelect("post.og_img_url", "ogImgUrl")
        .addSelect("post.secret_yn", "secretYn")
        .addSelect("post.pin_yn", "pinYn")

    const caseSensitive = 'Y' === searchPostDto.c ? 'BINARY ' : '';

    // 전체 검색
    if ('001' === searchPostDto.t) {
      query = query
        .leftJoin("post.postCategory", "postCategory", "postCategory.post_id = post.id")
        .leftJoin("post.postTag", "postTag", "postTag.post_id = post.id")
        .leftJoin("postCategory.category", "category", "category.id = postCategory.category_id")
        .leftJoin("postTag.tag", "tag", "tag.id = postTag.tag_id")
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
        .leftJoin("post.postCategory", "postCategory", "postCategory.post_id = post.id")
        .leftJoin("postCategory.category", "category", "category.id = postCategory.category_id")
        .where(new Brackets(qb => {
          qb.where(caseSensitive + "category.nm LIKE :nm", { nm: `%${searchPostDto.q}%` });
        }));
    }

    // 태그로 검색
    if ('005' === searchPostDto.t) {
      query = query
        .leftJoin("post.postTag", "postTag", "postTag.post_id = post.id")
        .leftJoin("postTag.tag", "tag", "tag.id = postTag.tag_id")
        .where(new Brackets(qb => {
          qb.where(caseSensitive + "tag.nm LIKE :nm", { nm: `%${searchPostDto.q}%` });
        }));
    }

    if ('N' === searchPostDto?.isLogin) {
      query = query
        .andWhere("post.secret_yn = :secret_yn", { secret_yn: 'N' });
    }

    query = query
      .groupBy("post.id")
      .orderBy("post.reg_date", "DESC")
      .limit(paginationDto.pageSize)
      .offset(paginationDto.getSkipSize());

    return await Promise.all([
      await query.getRawMany(),
      await query.getCount(),
    ]);
  }

  // 포스트의 연도 및 개수를 조회한다.
  async listYearAndCount(listPostDto: ListPostDto): Promise<Post[]> {
    let query = this.createQueryBuilder('post')
      .select("YEAR(reg_date)", "year")
        .distinct(true)
      .addSelect("COUNT('year')", "count");

    if ('N' === listPostDto?.isLogin) {
      query = query
        .where("secret_yn = :secret_yn", { secret_yn: 'N' });
    }

    query = query
      .groupBy("year")
      .orderBy("year", "DESC");

    return query.getRawMany();
  }

  // 연도별 포스트 목록을 조회한다.
  async listPostByYear(
    listPostDto: ListPostDto,
    paginationDto: PaginationDto
  ): Promise<[Post[], number]> {
    let query = this.createQueryBuilder('post')
      .where("YEAR(reg_date) = :year", { year: listPostDto?.year });

    if ('N' === listPostDto?.isLogin) {
      query = query
        .andWhere("secret_yn = :secret_yn", { secret_yn: 'N' });
    }
      
    query = query
      .orderBy("reg_date", "DESC")
      .limit(paginationDto.pageSize)
      .offset(paginationDto.getSkipSize());

    return await query.getManyAndCount();
  }

  // 카테고리별 포스트 목록을 조회한다.
  async listPostByCategory(
    listPostDto: ListPostDto,
    paginationDto: PaginationDto
  ): Promise<[Post[], number]> {
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
        ...('N' === listPostDto?.isLogin && { secretYn: 'N' }),
        postCategory: {
          categoryId: listPostDto?.categoryId
        },
      },
      order: {
        regDate: 'DESC',
      },
      take: paginationDto.pageSize,
      skip: paginationDto.getSkipSize(),
    });
  }

  // 태그별 포스트 목록을 조회한다.
  async listPostByTag(
    listPostDto: ListPostDto,
    paginationDto: PaginationDto
  ): Promise<[Post[], number]> {
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
        ...('N' === listPostDto?.isLogin && { secretYn: 'N' }),
        postTag: {
          tagId: listPostDto?.tagId
        },
      },
      order: {
        regDate: 'DESC',
      },
      take: paginationDto.pageSize,
      skip: paginationDto.getSkipSize(),
    });
  }

}