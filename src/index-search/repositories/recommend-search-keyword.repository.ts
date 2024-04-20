import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { RecommendSearchKeywordEntity, SaveRecommendSearchKeywordDto } from '../models';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@CustomRepository(RecommendSearchKeywordEntity)
export class RecommendSearchKeywordRepository extends Repository<RecommendSearchKeywordEntity> {

  /** 추천 검색어를 등록한다. */
  async addRecommendSearchKeyword(saveRecommendSearchKeywordDto: SaveRecommendSearchKeywordDto): Promise<InsertResult> {
    return await this.insert(saveRecommendSearchKeywordDto);
  }

  /** 모든 검색 색인 데이터를 삭제한다. */
  async removeRecommendSearchKeyworAll(): Promise<DeleteResult> {
    return await this.createQueryBuilder('recommendSearchKeyword')
      .delete()
      .where("1=1")
      .execute();
  }

}