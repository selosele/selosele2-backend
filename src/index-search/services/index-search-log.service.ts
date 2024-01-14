import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IndexSearchLogEntity } from '../models';
import { IndexSearchLogRepository } from '../repositories/index-search-log.repository';

@Injectable()
export class IndexSearchLogService {

  constructor(
    @InjectRepository(IndexSearchLogRepository)
    private readonly indexSearchLogRepository: IndexSearchLogRepository,
  ) {}

  /** 검색 색인 로그 목록을 조회한다. */
  async listIndexSearchLog(): Promise<IndexSearchLogEntity[]> {
    return await this.indexSearchLogRepository.listIndexSearchLog();
  }

}
