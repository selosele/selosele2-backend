import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { IndexSearchEntity, SaveIndexSearchDto } from '../models';
import { Brackets, DeleteResult, InsertResult, Repository } from 'typeorm';
import { ListPostDto, SearchPostDto } from '@/post/models';
import { PaginationDto } from '@/shared/models';
import { isNotBlank } from '@/shared/utils';

@CustomRepository(IndexSearchEntity)
export class IndexSearchRepository extends Repository<IndexSearchEntity> {

  /** 검색 데이터 포스트 목록을 조회한다. */
  async listPost(
    searchPostDto: SearchPostDto,
    paginationDto: PaginationDto,
  ): Promise<[IndexSearchEntity[], number]> {
    let query = this.createQueryBuilder('indexSearch')
      .select("indexSearch.cnnc_id", "id")
        .addSelect("indexSearch.cnnc_reg_date", "regDate")
        .addSelect("indexSearch.title", "title")
        .addSelect("indexSearch.cont", "cont")
        .addSelect("indexSearch.og_img_url", "ogImgUrl")
        .addSelect("indexSearch.secret_yn", "secretYn")
        .addSelect("indexSearch.pin_yn", "pinYn")
      .where("indexSearch.type_cd = 'D03001'");

    if ('N' === searchPostDto?.isLogin) {
      query = query
        .andWhere("indexSearch.secret_yn = 'N'");
    }

    /**
     * 검색어 목록
     *   - 검색어를 한칸 띄어쓰기 기준으로 배열을 만들어서 다중 검색이 되도록 한다.
     */
    const searchQueries = searchPostDto.q.split(' ');

    /** 대소문자 구분 여부 */
    const caseSensitive = ('Y' === searchPostDto.c) ? 'BINARY ' : '';

    // 전체 검색
    if ('001' === searchPostDto.t) {
      query = query
        .andWhere(new Brackets(qb => {
          searchQueries.forEach(q => {
            qb.orWhere(caseSensitive + `indexSearch.title LIKE '%${q}%'`)
              .orWhere(caseSensitive + `indexSearch.cont LIKE '%${q}%'`)
              .orWhere(caseSensitive + `indexSearch.category LIKE '%${q}%'`);
          });
        }));
    }
    
    // 제목으로 검색
    if ('002' === searchPostDto.t) {
      query = query
        .andWhere(new Brackets(qb => {
          searchQueries.forEach(q => {
            qb.orWhere(caseSensitive + `indexSearch.title LIKE '%${q}%'`);
          });
        }));
    }

    // 내용으로 검색
    if ('003' === searchPostDto.t) {
      query = query
        .andWhere(new Brackets(qb => {
          searchQueries.forEach(q => {
            qb.orWhere(caseSensitive + `indexSearch.cont LIKE '%${q}%'`);
          });
        }));
    }

    // 카테고리로 검색
    if ('004' === searchPostDto.t) {
      query = query
        .andWhere(new Brackets(qb => {
          searchQueries.forEach(q => {
            qb.orWhere(caseSensitive + `indexSearch.category LIKE '%${q}%'`);
          });
        }));
    }

    // 태그로 검색
    if ('005' === searchPostDto.t) {
      query = query
        .andWhere(new Brackets(qb => {
          searchQueries.forEach(q => {
            qb.orWhere(caseSensitive + `indexSearch.tag LIKE '%${q}%'`);
          });
        }));
    }

    query = query
      .groupBy("indexSearch.cnnc_id")
      .orderBy("indexSearch.cnnc_reg_date", "DESC")
      .limit(paginationDto.pageSize)
      .offset(paginationDto.getSkipSize());

    return await Promise.all([
      query.getRawMany(),
      query.getCount(),
    ]);
  }

  /** 검색 데이터 목록을 조회한다. */
  async listIndexSearch(typeCd: string) {
    return await this.findAndCount({
      ...(isNotBlank(typeCd) && {
        where: { typeCd },
      }),
      order: {
        id: 'ASC',
      },
    });
  }

  /** 검색 데이터 포스트의 연도 및 개수를 조회한다. */
  async listYearAndCount(listPostDto: ListPostDto): Promise<IndexSearchEntity[]> {
    let query = this.createQueryBuilder('indexSearch')
      .select("cnnc_reg_year", "year")
        .addSelect("COUNT('cnnc_reg_year')", "count")

    if ('N' === listPostDto?.isLogin) {
      query = query
        .where("secret_yn = 'N'");
    }

    query = query
      .groupBy("cnnc_reg_year")
      .orderBy("cnnc_reg_year", "DESC");

    return await query.getRawMany();
  }

  /** 연도별 검색 데이터 포스트 목록을 조회한다. */
  async listPostByYear(
    listPostDto: ListPostDto,
    paginationDto: PaginationDto
  ): Promise<[IndexSearchEntity[], number]> {
    let query = this.createQueryBuilder('indexSearch')
      .select("cnnc_id", "id")
        .addSelect("title")
        .addSelect("cnnc_reg_date", "regDate")
      .where("cnnc_reg_year = :year", { year: listPostDto?.year })

      if ('N' === listPostDto?.isLogin) {
        query = query
          .andWhere("secret_yn = 'N'");
      }

      query = query
        .orderBy("cnnc_reg_date", "DESC")
        .limit(paginationDto.pageSize)
        .offset(paginationDto.getSkipSize());

    return await Promise.all([
      query.getRawMany(),
      query.getCount(),
    ]);
  }

  /** 검색 데이터를 등록한다. */
  async addIndexSearch(saveIndexSearchDto: SaveIndexSearchDto): Promise<InsertResult> {
    return await this.insert(saveIndexSearchDto);
  }

  /** 모든 검색 데이터를 삭제한다. */
  async removeIndexSearchAll(): Promise<DeleteResult> {
    return await this.createQueryBuilder('indexSearch')
      .delete()
      .where("1=1")
      .execute();
  }

}