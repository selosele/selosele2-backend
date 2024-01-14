import { Module } from '@nestjs/common';
import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity, PostLikeEntity, PostReplyEntity } from './models';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { PostRepository } from './repositories/post.repository';
import { PostCategoryRepository } from '@/category/repositories/post-category.repository';
import { PostCategoryEntity } from '@/category/models';
import { PostLikeRepository } from './repositories/post-like.repository';
import { PostLikeService } from './services/post-like.service';
import { PostLikeController } from './controllers/post-like.controller';
import { PostReplyRepository } from './repositories/post-reply.repository';
import { PostReplyService } from './services/post-reply.service';
import { PostReplyController } from './controllers/post-reply.controller';
import { BlogConfigEntity } from '@/blog-config/models';
import { BlogConfigRepository } from '@/blog-config/repositories/blog-config.repository';
import { PostTagEntity, TagEntity } from '@/tag/models';
import { PostTagRepository } from '@/tag/repositories/post-tag.repository';
import { TagRepository } from '@/tag/repositories/tag.repository';
import { FileUploaderService } from '@/file-uploader/services/file-uploader.service';
import { NotificationService } from '@/notification/services/notification.service';
import { NotificationRepository } from '@/notification/repositories/notification.repository';
import { NotificationEntity } from '@/notification/models';
import { DatabaseModule } from '@/database/database.module';
import { IndexSearchService } from '@/index-search/services/index-search.service';
import { IndexSearchEntity } from '@/index-search/models';
import { IndexSearchRepository } from '@/index-search/repositories/index-search.repository';
import { IndexSearchLogRepository } from '@/index-search/repositories/index-search-log.repository';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      PostEntity,
      PostCategoryEntity,
      PostTagEntity,
      PostLikeEntity,
      PostReplyEntity,
      TagEntity,
      BlogConfigEntity,
      NotificationEntity,
      IndexSearchEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
      PostRepository,
      PostCategoryRepository,
      PostTagRepository,
      PostLikeRepository,
      PostReplyRepository,
      TagRepository,
      BlogConfigRepository,
      NotificationRepository,
      IndexSearchRepository,
      IndexSearchLogRepository
    ]),
  ],
  controllers: [
    PostController,
    PostLikeController,
    PostReplyController
  ],
  providers: [
    PostService,
    PostLikeService,
    PostReplyService,
    FileUploaderService,
    NotificationService,
    IndexSearchService
  ]
})
export class PostModule {}
