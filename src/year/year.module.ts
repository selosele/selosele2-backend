import { Module } from '@nestjs/common';
import { YearService } from './year.service';
import { YearController } from './year.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/post/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [YearController],
  providers: [YearService]
})
export class YearModule {}
