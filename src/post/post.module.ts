import { Module } from '@nestjs/common';
import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity, PostLikeEntity, PostReplyEntity } from './models';
import { CustomTypeOrmModule } from 'src/configs/database/CustomTypeOrmModule';
import { PostRepository } from './repositories/post.repository';
import { PostCategoryRepository } from 'src/category/repositories/post-category.repository';
import { PostCategoryEntity } from 'src/category/models';
import { PostLikeRepository } from './repositories/post-like.repository';
import { PostLikeService } from './services/post-like.service';
import { PostLikeController } from './controllers/post-like.controller';
import { PostReplyRepository } from './repositories/post-reply.repository';
import { PostReplyService } from './services/post-reply.service';
import { PostReplyController } from './controllers/post-reply.controller';
import { BlogConfigEntity } from 'src/blog-config/models';
import { BlogConfigRepository } from 'src/blog-config/repositories/blog-config.repository';
import { PostTagEntity, TagEntity } from 'src/tag/models';
import { PostTagRepository } from 'src/tag/repositories/post-tag.repository';
import { TagRepository } from 'src/tag/repositories/tag.repository';
import { FileUploaderService } from 'src/file-uploader/services/file-uploader.service';
import { NotificationService } from 'src/notification/services/notification.service';
import { NotificationRepository } from 'src/notification/repositories/notification.repository';
import { NotificationEntity } from 'src/notification/models';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PostEntity,
      PostCategoryEntity,
      PostTagEntity,
      PostLikeEntity,
      PostReplyEntity,
      TagEntity,
      BlogConfigEntity,
      NotificationEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      PostRepository,
      PostCategoryRepository,
      PostTagRepository,
      PostLikeRepository,
      PostReplyRepository,
      TagRepository,
      BlogConfigRepository,
      NotificationRepository
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
    NotificationService
  ]
})
export class PostModule {}
