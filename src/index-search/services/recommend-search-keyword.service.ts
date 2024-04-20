import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, EntityManager } from 'typeorm';
import { RecommendSearchKeywordRepository } from '../repositories/recommend-search-keyword.repository';
import { IndexSearchRepository } from '../repositories/index-search.repository';
import { ListIndexSearchDto, SaveRecommendSearchKeywordDto, searchCodes } from '../models';
import { isNotBlank } from '@/shared/utils';

@Injectable()
export class RecommendSearchKeywordService {

  private readonly logger = new Logger(RecommendSearchKeywordService.name);

  constructor(
    @InjectRepository(RecommendSearchKeywordRepository)
    private readonly recommendSearchKeywordRepository: RecommendSearchKeywordRepository,
    @InjectRepository(IndexSearchRepository)
    private readonly indexSearchRepository: IndexSearchRepository,
    private readonly dataSource: DataSource,
  ) {}

  /** 추천 검색어를 저장한다. */
  async saveRecommendSearchKeyword(): Promise<void> {

    // 트랜잭션을 시작한다.
    await this.dataSource.transaction<void>(async (em: EntityManager) => {

      // 1. 모든 추천 검색어 데이터를 삭제한다.
      const deleteRes = await em.withRepository(this.recommendSearchKeywordRepository).removeRecommendSearchKeyworAll();
      this.logger.warn(`1. 모든 추천 검색어 데이터 삭제: ${deleteRes.affected}건 삭제됨`);

      const listIndexSearchDto: ListIndexSearchDto = {};
      listIndexSearchDto.typeCd = searchCodes.INDEX_SEARCH_POST.id;
      listIndexSearchDto.secretYn = 'N';
      listIndexSearchDto.recommendYn = 'Y';
      listIndexSearchDto.take = 3;
        
      // 2. 포스트 색인 데이터를 조회한다.
      const [indexPosts, indexPostCount] = await em.withRepository(this.indexSearchRepository).listIndexSearch(listIndexSearchDto);
      this.logger.warn(`2. 색인 데이터 총 ${indexPostCount}건 조회됨`);

      let insertPostTotal = 0;
      let keywordArr: string[] = [];

      for (let i = 0; i < indexPosts.length; i++) {
        const post = indexPosts[i];
        const tags = post.tag.split(';');

        for (const tag of tags) {
          if (isNotBlank(tag))
            keywordArr.push(tag);
        }
        
        keywordArr.push(...post.title.split(' '));
      }

      for (let i = 0; i < keywordArr.length; i++) {
        const saveRecommendSearchKeywordDto: SaveRecommendSearchKeywordDto = {};
        saveRecommendSearchKeywordDto.id = (i + 1);
        saveRecommendSearchKeywordDto.keyword = keywordArr[i];
  
        // 3. 추천 검색어를 저장한다.
        const insertRes = await em.withRepository(this.recommendSearchKeywordRepository).addRecommendSearchKeyword(saveRecommendSearchKeywordDto);
        insertPostTotal += insertRes.raw.length;
      }

      this.logger.warn(`3. 추천 검색어 데이터 총 ${insertPostTotal}건 저장 완료`);
    });
  }

}
