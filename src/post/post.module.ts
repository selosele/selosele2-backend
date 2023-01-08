import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { PostRepository } from './post.repository';
import { PostCategoryRepository } from 'src/category/post-category.repository';
import { PostCategoryEntity } from 'src/category/entities/post-category.entity';
import { PostLikeEntity } from './entities/post-like.entity';
import { PostLikeRepository } from './post-like.repository';
import { PostLikeService } from './post-like.service';
import { PostLikeController } from './post-like.controller';
import { PostReplyEntity } from './entities/post-reply.entity';
import { PostReplyRepository } from './post-reply.repository';
import { PostReplyService } from './post-reply.service';
import { PostReplyController } from './post-reply.controller';

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
