import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostsController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [PostsController],
  providers: [PostService]
})
export class PostModule {}
