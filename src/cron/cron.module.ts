import { Module } from '@nestjs/common';
import { CronService } from './services/cron.service';
import { IndexSearchService } from '@/index-search/services/index-search.service';
import { DatabaseModule } from '@/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndexSearchEntity, IndexSearchLogEntity } from '@/index-search/models';
import { PostEntity } from '@/post/models';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { IndexSearchRepository } from '@/index-search/repositories/index-search.repository';
import { PostRepository } from '@/post/repositories/post.repository';
import { ScheduleModule } from '@nestjs/schedule';
import { IndexSearchLogRepository } from '@/index-search/repositories/index-search-log.repository';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      IndexSearchEntity,
      IndexSearchLogEntity,
      PostEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
      IndexSearchRepository,
      IndexSearchLogRepository,
      PostRepository
    ]),
    ScheduleModule.forRoot()
  ],
  providers: [
    CronService,
    IndexSearchService
  ]
})
export class CronModule {}
