import { Module } from '@nestjs/common';
import { CronService } from './services/cron.service';
import { IndexSearchService } from '@/index-search/services/index-search.service';
import { DatabaseModule } from '@/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndexSearchEntity } from '@/index-search/models';
import { PostEntity } from '@/post/models';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { IndexSearchRepository } from '@/index-search/repositories/index-search.repository';
import { PostRepository } from '@/post/repositories/post.repository';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      IndexSearchEntity,
      PostEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
      IndexSearchRepository,
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
