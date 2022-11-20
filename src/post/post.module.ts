import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostsController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { PostRepository } from './post.repository';
import { PostCategoryRepository } from 'src/category/post-category.repository';
import { PostCategory } from 'src/category/post-category.entity';
import { PostLike } from './post-like.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, PostCategory, PostLike]),
    CustomTypeOrmModule.forCustomRepository([
      PostRepository,
      PostCategoryRepository,
    ]),
  ],
  controllers: [PostsController],
  providers: [PostService]
})
export class PostModule {}
