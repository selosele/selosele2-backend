import { Module } from '@nestjs/common';
import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity, PostLikeEntity, PostReplyEntity } from './models';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { PostRepository } from './repositories/post.repository';
import { PostCategoryRepository } from 'src/category/repositories/post-category.repository';
import { PostCategoryEntity } from 'src/category/models';
import { PostLikeRepository } from './repositories/post-like.repository';
import { PostLikeService } from './services/post-like.service';
import { PostLikeController } from './controllers/post-like.controller';
import { PostReplyRepository } from './repositories/post-reply.repository';
import { PostReplyService } from './services/post-reply.service';
import { PostReplyController } from './controllers/post-reply.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PostEntity,
      PostCategoryEntity,
      PostLikeEntity,
      PostReplyEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      PostRepository,
      PostCategoryRepository,
      PostLikeRepository,
      PostReplyRepository
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
    PostReplyService
  ]
})
export class PostModule {}
