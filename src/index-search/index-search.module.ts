import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndexSearchEntity, IndexSearchLogEntity, RecommendSearchKeywordEntity } from './models';
import { IndexSearchRepository } from './repositories/index-search.repository';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { IndexSearchService } from './services/index-search.service';
import { IndexSearchController } from './controllers/index-search.controller';
import { PostRepository } from '@/post/repositories/post.repository';
import { PostEntity } from '@/post/models';
import { IndexSearchLogRepository } from './repositories/index-search-log.repository';
import { IndexSearchLogService } from './services/index-search-log.service';
import { IndexSearchLogController } from './controllers/index-search-log.controller';
import { RecommendSearchKeywordService } from './services/recommend-search-keyword.service';
import { RecommendSearchKeywordRepository } from './repositories/recommend-search-keyword.repository';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      IndexSearchEntity,
      IndexSearchLogEntity,
      RecommendSearchKeywordEntity,
      PostEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
      IndexSearchRepository,
      IndexSearchLogRepository,
      RecommendSearchKeywordRepository,
      PostRepository
    ])
  ],
  controllers: [
    IndexSearchController,
    IndexSearchLogController
  ],
  providers: [
    IndexSearchService,
    IndexSearchLogService,
    RecommendSearchKeywordService
  ]
})
export class IndexSearchModule {}