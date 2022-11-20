import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { PostRepository } from './post.repository';
import { PostCategoryRepository } from 'src/category/post-category.repository';
import { PostCategoryEntity } from 'src/category/post-category.entity';
import { PostLikeEntity } from './post-like.entity';
import { PostLikeRepository } from './post-like.repository';
import { PostLikeService } from './post-like.service';
import { PostLikeController } from './post-like.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity, PostCategoryEntity, PostLikeEntity]),
    CustomTypeOrmModule.forCustomRepository([
      PostRepository,
      PostCategoryRepository,
      PostLikeRepository,
    ]),
  ],
  controllers: [PostController, PostLikeController],
  providers: [PostService, PostLikeService]
})
export class PostModule {}
