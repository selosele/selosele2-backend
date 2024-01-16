import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IndexSearchRepository } from '../repositories/index-search.repository';
import { Builder } from 'builder-pattern';
import { ListPostDto, PostEntity, SearchPostDto } from '@/post/models';
import { IndexSearchEntity, SaveIndexSearchDto, searchCodes } from '../models';
import { DataSource, DeleteResult, EntityManager, InsertResult } from 'typeorm';
import { PostRepository } from '@/post/repositories/post.repository';
import { PaginationDto } from '@/shared/models';
import { ListIndexSearchDto } from '../models';
import { serialize } from '@/shared/utils';
import { IndexSearchLogRepository } from '../repositories/index-search-log.repository';
import { AddIndexSearchLogDto } from '../models/dto/add-index-search-log.dto';

@Injectable()
export class IndexSearchService {

  private readonly logger = new Logger(IndexSearchService.name);

  constructor(
    @InjectRepository(IndexSearchRepository)
    private readonly indexSearchRepository: IndexSearchRepository,
    @InjectRepository(IndexSearchLogRepository)
    private readonly indexSearchLogRepository: IndexSearchLogRepository,
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
    private readonly dataSource: DataSource,
  ) {}

  /** 검색 데이터 포스트 목록을 조회한다. */
  async listIndexSearchPost(
    searchPostDto: SearchPostDto,
    paginationDto: PaginationDto,
  ): Promise<[ListIndexSearchDto[], number]> {
    const indexSearches: [IndexSearchEntity[], number] = await this.indexSearchRepository.listIndexSearchPost(searchPostDto, paginationDto);
    
    return [
      serialize<ListIndexSearchDto[]>(indexSearches[0]),
      indexSearches[1]
    ];
  }

  /** 검색 데이터를 저장한다. */
  async saveIndexSearch(autoYn: string = 'Y'): Promise<void> {
    const startTime = Date.now();

    let insertPostLogRes: InsertResult;
    let insertPostTotal = 0;

    // 트랜잭션을 시작한다.
    await this.dataSource.transaction<void>(async (em: EntityManager) => {

      // 1. 모든 검색 데이터를 삭제한다.
      const deleteRes: DeleteResult = await em.withRepository(this.indexSearchRepository).removeIndexSearchAll();
      this.logger.warn(`1. 모든 검색 데이터 삭제: ${deleteRes.affected}건 삭제됨`);

      const listPostDto = Builder(ListPostDto)
                          .tmpYn('N')
                          .build();

      // 2. 모든 포스트 목록을 조회한다.
      const posts: [PostEntity[], number] = await em.withRepository(this.postRepository).listPost(listPostDto);
      this.logger.warn(`2. 포스트 총 ${posts[1]}건 조회됨`);
      
      for (let i = 0; i < posts[0].length; i++) {
        const post = posts[0][i];
        const no = (i + 1);

        let categoryInfo = ``;
        let tagInfo = ``;

        // 포스트 카테고리 데이터 가공
        for (const postCategory of post.postCategory) {
          categoryInfo += `${postCategory.category.nm};`;
        }

        // 포스트 태그 데이터 가공
        for (const postTag of post.postTag) {
          tagInfo += `${postTag.tag.nm};`;
        }

        const saveIndexSearchDto = Builder(SaveIndexSearchDto)
                                   .id(no)
                                   .cnncId(post.id)
                                   .cnncRegYear(new Date(post.regDate).getFullYear() as unknown as string)
                                   .cnncRegDate(post.regDate)
                                   .title(post.title)
                                   .cont(post.cont.substring(0, 180))
                                   .ogImgUrl(post.ogImgUrl)
                                   .secretYn(post.secretYn)
                                   .pinYn(post.pinYn)
                                   .likeCnt(post.postLike.length)
                                   .replyCnt(post.postReply.filter(d => d.delYn === 'N').length)
                                   .category(categoryInfo)
                                   .tag(tagInfo)
                                   .typeCd(searchCodes.INDEX_SEARCH_POST.id)
                                   .build();

        // 3. 색인 데이터를 저장한다.
        const insertRes = await em.withRepository(this.indexSearchRepository).addIndexSearch(saveIndexSearchDto);
        insertPostTotal += insertRes.raw.length;
      }
      
      const endTime = Date.now();
      const resTime = (endTime - startTime) / 1000;
      
      this.logger.warn(`3. 포스트 검색 데이터 저장: 총 ${insertPostTotal}건 색인됨`);
      this.logger.warn(`4. 포스트 색인 소요 시간: ${resTime}초`);

      // 4. 포스트 색인 데이터를 조회한다.
      const indexPostsData: [IndexSearchEntity[], number] = await em.withRepository(this.indexSearchRepository).listIndexSearch(searchCodes.INDEX_SEARCH_POST.id);
      const indexPosts = indexPostsData[0];

      const addIndexSearchLogDto = Builder(AddIndexSearchLogDto)
                                   .typeCd(searchCodes.INDEX_SEARCH_POST.id)
                                   .autoYn(autoYn)
                                   .cnt(indexPostsData[1])
                                   .startDate(indexPosts[0].regDate)
                                   .endDate(indexPosts[indexPosts.length - 1].regDate)
                                   .build();

      // 5. 포스트 색인 데이터 로그를 저장한다.
      insertPostLogRes = await em.withRepository(this.indexSearchLogRepository).addIndexSearchLog(addIndexSearchLogDto);
    });

    if (0 < insertPostLogRes?.raw.length) {
      this.logger.warn(`5. 포스트 색인 로그 저장 완료`);
    }
  }

}
