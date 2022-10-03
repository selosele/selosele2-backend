import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostsController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { YearModule } from 'src/year/year.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    YearModule,
  ],
  controllers: [PostsController],
  providers: [PostService]
})
export class PostModule {}
