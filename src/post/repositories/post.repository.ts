import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { PaginationDto } from '@/shared/models';
import { isNotEmpty } from '@/shared/utils';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { GetPostDto, ListPostDto, PostEntity } from '../models';
import { CountPostDto } from '../models/dto/count-post.dto';
import { SavePostDto } from '../models/dto/save-post.dto';

@CustomRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {

  /** 메인 포스트 목록을 조회한다. */
  async listPostMain(listPostDto: ListPostDto): Promise<[PostEntity[], number]> {
    let query = this.createQueryBuilder('post')
      .select("post.id", "id").distinct(true)
        .addSelect("COUNT(postLike.id) OVER (PARTITION BY postLike.id)", "likeCnt")
        .addSelect("post.title", "title")
        .addSelect("post.reg_date", "regDate")
        .addSelect("post.reply_cnt", "replyCnt")
        .addSelect("post.cont", "cont")
        .addSelect("post.og_img_url", "ogImgUrl")
        .addSelect("post.secret_yn", "secretYn")
        .addSelect("post.pin_yn", "pinYn")
        .addSelect("post.tmp_yn", "tmpYn")
        .addSelect("postCategory.category_id", "categoryId")
      .leftJoin("post.postCategory", "postCategory")
      .leftJoin("post.postLike", "postLike")
      .where("1=1")

    if ('N' === listPostDto?.isLogin) {
      query = query
        .andWhere("post.tmp_yn = 'N'")
        .andWhere("post.secret_yn = 'N'");
    }

    if (isNotEmpty(listPostDto?.categoryId) && 0 < listPostDto?.categoryId) {
      query = query
        .andWhere("postCategory.category_id = :category_id", { category_id: listPostDto.categoryId });
    }

    query = query
      .groupBy("post.id")
        .addGroupBy("postCategory.category_id")
      .orderBy("post.pin_yn", "DESC")
        .addOrderBy("post.reg_date", "DESC");

    const posts = await query.getRawMany();

    return await Promise.all([
      posts,
      posts.length,
    ]);
  }

  /** 포스트 목록을 조회한다. */
  async listPost(listPostDto: ListPostDto): Promise<[PostEntity[], number]> {
    return await this.findAndCount({
      relations: {
        postCategory: {
          category: true,
        },
        postTag: {
          tag: true,
        },
        postLike: true,
        postReply: true,
      },
      where: {
        tmpYn: listPostDto.tmpYn,
        ...('N' === listPostDto?.isLogin && { secretYn: 'N' }),
      },
      order: {
        id: 'DESC',
      },
    });
  }

  /** 카테고리별 포스트 목록을 조회한다. */
  async listPostByCategory(
    listPostDto: ListPostDto,
    paginationDto: PaginationDto
  ): Promise<[PostEntity[], number]> {
    return await this.findAndCount({
      relations: {
        postCategory: {
          category: true,
        }
      },
      select: {
        id: true,
        title: true,
        regDate: true,
        cont: false,
        secretYn: true,
        postCategory: {
          postId: false,
          categoryId: true,
          category: {
            id: false,
            nm: true,
            desc: true,
            regDate: false,
          },
        },
      },
      where: {
        tmpYn: 'N',
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

  /** 태그별 포스트 목록을 조회한다. */
  async listPostByTag(
    listPostDto: ListPostDto,
    paginationDto: PaginationDto
  ): Promise<[PostEntity[], number]> {
    return await this.findAndCount({
      relations: {
        postTag: {
          tag: true,
        }
      },
      select: {
        id: true,
        title: true,
        regDate: true,
        cont: false,
        secretYn: true,
        postTag: {
          postId: false,
          tagId: true,
          tag: {
            id: false,
            nm: true,
            desc: true,
            regDate: false,
          },
        },
      },
      where: {
        tmpYn: 'N',
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

  /** 이전/다음 포스트 목록을 조회한다. */
  async listPrevAndNextPost(listPostDto: ListPostDto): Promise<PostEntity[]> {
    let query = this.createQueryBuilder('post')
      .select("post.id", "id")
        .addSelect("post.title", "title")
        .addSelect("post.secret_yn", "secretYn");

    let prevSubQuery = query.subQuery()
      .select("MAX(id)")
      .from(PostEntity, 'prev')
      .where("tmp_yn = 'N'");

    if ('N' === listPostDto?.isLogin) {
      prevSubQuery = prevSubQuery
        .andWhere("prev.secret_yn = 'N'");
    }

    prevSubQuery = prevSubQuery
      .andWhere("prev.id < :id", { id: listPostDto?.id });

    let nextSubQuery = query.subQuery()
      .select("MIN(id)")
      .from(PostEntity, 'next')
      .where("tmp_yn = 'N'");

    if ('N' === listPostDto?.isLogin) {
      nextSubQuery = nextSubQuery
        .andWhere("next.secret_yn = 'N'");
    }

    nextSubQuery = nextSubQuery
      .andWhere("next.id > :id", { id: listPostDto?.id });

    const [prevSql, prevParams] = query
      .where(`id = ${prevSubQuery.getQuery()}`)
      .getQueryAndParameters();
    const [nextSql, nextParams] = query
      .where(`id = ${nextSubQuery.getQuery()}`)
      .getQueryAndParameters();
    
    const rawQuery = await this.manager.query(
      `(${prevSql}) UNION (${nextSql})`,
      [...prevParams, ...nextParams],
    ) as PostEntity[];

    return this.create(rawQuery);
  }

  /** 포스트를 조회한다. */
  async getPost(getPostDto: GetPostDto): Promise<PostEntity> {
    return await this.findOne({
      relations: {
        postCategory: {
          category: true,
        },
        postTag: {
          tag: true,
        },
        postLike: true,
      },
      select: {
        id: true,
        title: true,
        regDate: true,
        modDate: true,
        cont: true,
        ogDesc: true,
        ogImg: true,
        ogImgUrl: true,
        ogImgSize: true,
        secretYn: true,
        pinYn: true,
        tmpYn: true,
        replyCnt: true,
        postLike: {
          postId: true,
          ip: false,
        },
        postReply: {
          id: true,
          parentId: true,
          parentReplyId: true,
          group: true,
          sort: true,
          depth: true,
          author: true,
          authorPw: false,
          ip: false,
          cont: true,
          regDate: true,
          modDate: true,
          delYn: true,
        },
      },
      where: {
        ...('N' === getPostDto?.isLogin && {
          secretYn: 'N',
          tmpYn: 'N',
        }),
        id: getPostDto?.id
      },
    });
  }

  /** 포스트의 개수를 조회한다. */
  async countPost(countPostDto?: CountPostDto): Promise<number> {
    return await this.count({
      where: {
        ...(isNotEmpty(countPostDto.pinYn) && { pinYn: countPostDto.pinYn }),
      },
    });
  }

  /** 포스트를 등록/수정한다. */
  async savePost(savePostDto: SavePostDto): Promise<PostEntity> {
    return await this.save(savePostDto);
  }

  /** 포스트 다건을 삭제한다. */
  async removePosts(idList: number[]): Promise<DeleteResult> {
    return await this.delete(idList);
  }

  /** 포스트를 삭제한다. */
  async removePost(id: number): Promise<DeleteResult> {
    return await this.delete(id);
  }

  /** 포스트의 댓글 개수를 수정한다. */
  async updatePostReplyCnt(savePostDto: SavePostDto): Promise<UpdateResult> {
    return await this.createQueryBuilder('post')
      .update()
      .set({
        replyCnt: savePostDto.replyCnt,
        modDate: savePostDto.modDate,
      })
      .where({
        id: savePostDto.id,
      })
      .execute();
  }

}