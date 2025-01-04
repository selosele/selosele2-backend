import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, EntityManager, InsertResult } from 'typeorm';
import { ListPostDto, SearchPostDto } from '@/post/models';
import { PostRepository } from '@/post/repositories/post.repository';
import { PaginationDto } from '@/shared/models';
import { serialize } from '@/shared/utils';
import { IndexSearchRepository } from '../repositories/index-search.repository';
import { IndexSearchLogRepository } from '../repositories/index-search-log.repository';
import { SaveIndexSearchDto, searchCodes, IndexSearchDto, AddIndexSearchLogDto, ListIndexSearchDto, CountIndexSearchStatResponseDto } from '../models';

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

  /** 검색 색인 데이터 포스트 목록을 조회한다. */
  async listPost(
    searchPostDto: SearchPostDto,
    paginationDto: PaginationDto,
  ): Promise<[IndexSearchDto[], number]> {
    const [indexSearches, indexSearchCount] = await this.indexSearchRepository.listPost(searchPostDto, paginationDto);
    
    return [
      serialize<IndexSearchDto[]>(indexSearches),
      indexSearchCount
    ];
  }

  /** 검색 색인 데이터를 저장한다. */
  async saveIndexSearch(autoYn: string = 'Y'): Promise<void> {
    const startTime = Date.now();

    let insertPostTotal = 0;

    // 트랜잭션을 시작한다.
    const result = await this.dataSource.transaction<InsertResult>(async (em: EntityManager) => {
      const indexSearchRepository = em.withRepository(this.indexSearchRepository);
      const indexSearchLogRepository = em.withRepository(this.indexSearchLogRepository);
      const postRepository = em.withRepository(this.postRepository);

      // 1. 모든 검색 색인 데이터를 삭제한다.
      const deleteRes = await indexSearchRepository.removeIndexSearchAll();
      this.logger.warn(`1. 모든 검색 색인 데이터 삭제: ${deleteRes.affected}건 삭제됨`);

      const listPostDto: ListPostDto = {};
      listPostDto.tmpYn = 'N';

      // 2. 모든 포스트 목록을 조회한다.
      const [posts, postCount] = await postRepository.listPost(listPostDto);
      this.logger.warn(`2. 포스트 총 ${postCount}건 조회됨`);
      
      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
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

        const saveIndexSearchDto: SaveIndexSearchDto = {};
        saveIndexSearchDto.id = no;
        saveIndexSearchDto.cnncId = post.id;
        saveIndexSearchDto.cnncRegYear = new Date(post.regDate).getFullYear() as unknown as string;
        saveIndexSearchDto.cnncRegDate = post.regDate;
        saveIndexSearchDto.title = post.title;
        saveIndexSearchDto.cont = post.cont.substring(0, 180);
        saveIndexSearchDto.ogImgUrl = post.ogImgUrl;
        saveIndexSearchDto.secretYn = post.secretYn;
        saveIndexSearchDto.pinYn = post.pinYn;
        saveIndexSearchDto.likeCnt = post.postLike.length;
        saveIndexSearchDto.replyCnt = post.postReply.filter(d => d.delYn === 'N').length;
        saveIndexSearchDto.category = categoryInfo;
        saveIndexSearchDto.tag = tagInfo;
        saveIndexSearchDto.typeCd = searchCodes.INDEX_SEARCH_POST.id;

        // 3. 검색 색인 데이터를 저장한다.
        const insertRes = await indexSearchRepository.addIndexSearch(saveIndexSearchDto);
        insertPostTotal += insertRes.raw.length;
      }
      
      const endTime = Date.now();
      const resTime = (endTime - startTime) / 1000;
      
      this.logger.warn(`3. 포스트 검색 색인 데이터 저장: 총 ${insertPostTotal}건 색인됨`);
      this.logger.warn(`4. 포스트 색인 소요 시간: ${resTime}초`);

      const listIndexSearchDto: ListIndexSearchDto = {};
      listIndexSearchDto.typeCd = searchCodes.INDEX_SEARCH_POST.id;
      
      // 4. 포스트 색인 데이터를 조회한다.
      const [_, indexPostCount] = await indexSearchRepository.listIndexSearch(listIndexSearchDto);

      const addIndexSearchLogDto: AddIndexSearchLogDto = {};
      addIndexSearchLogDto.typeCd = searchCodes.INDEX_SEARCH_POST.id;
      addIndexSearchLogDto.autoYn = autoYn;
      addIndexSearchLogDto.cnt = indexPostCount;
      addIndexSearchLogDto.startDate = new Date(startTime);
      addIndexSearchLogDto.endDate = new Date(endTime);

      // 5. 포스트 색인 데이터 로그를 저장하고 결과 값을 반환한다.
      return await indexSearchLogRepository.addIndexSearchLog(addIndexSearchLogDto);
    });

    if (0 < result?.raw.length) {
      this.logger.warn(`5. 포스트 색인 로그 저장 완료`);
    }
  }

  /** 유형별 검색 색인 데이터 개수를 조회한다. */
  async countIndexSearchStat(): Promise<CountIndexSearchStatResponseDto> {
    const [total, normal, secret, pin] = await Promise.all([
      await this.indexSearchRepository.countIndexSearchStat(),                  // 모든글
      await this.indexSearchRepository.countIndexSearchStat({ secretYn: 'N' }), // 공개글
      await this.indexSearchRepository.countIndexSearchStat({ secretYn: 'Y' }), // 비공개글
      await this.indexSearchRepository.countIndexSearchStat({ pinYn: 'Y' }),    // 고정글
    ]);
    
    return { total, normal, secret, pin };
  }

}
