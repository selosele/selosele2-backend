import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostsController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { PostRepository } from './post.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    CustomTypeOrmModule.forCustomRepository([PostRepository]),
  ],
  controllers: [PostsController],
  providers: [PostService]
})
export class PostModule {}
