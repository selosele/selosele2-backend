import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { IndexSearchLogEntity, AddIndexSearchLogDto } from '../models';
import { InsertResult, Repository } from 'typeorm';

@CustomRepository(IndexSearchLogEntity)
export class IndexSearchLogRepository extends Repository<IndexSearchLogEntity> {

  /** 검색 색인 로그 목록을 조회한다. */
  async listIndexSearchLog(): Promise<IndexSearchLogEntity[]> {
    return await this.find({
      order: {
        id: 'DESC',
      },
    });
  }

  /** 검색 색인 로그를 등록한다. */
  async addIndexSearchLog(addIndexSearchLogDto: AddIndexSearchLogDto): Promise<InsertResult> {
    return await this.insert(addIndexSearchLogDto);
  }

}