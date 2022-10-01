import { Module } from '@nestjs/common';
import { YearService } from './year.service';
import { YearController } from './year.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from 'src/posts/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  controllers: [YearController],
  providers: [YearService]
})
export class YearModule {}
