import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { TagEntity } from './tag.entity';
import { PostTagEntity } from './post-tag.entity';
import { TagRepository } from './tag.repository';
import { PostTagRepository } from './post-tag.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TagEntity, PostTagEntity]),
    CustomTypeOrmModule.forCustomRepository([TagRepository, PostTagRepository]),
  ],
  controllers: [TagController],
  providers: [TagService]
})
export class TagModule {}
