import { Module } from '@nestjs/common';
import { TagService } from './services/tag.service';
import { TagController } from './controllers/tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/database/CustomTypeOrmModule';
import { TagEntity, PostTagEntity } from './models';
import { TagRepository } from './repositories/tag.repository';
import { PostTagRepository } from './repositories/post-tag.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TagEntity,
      PostTagEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      TagRepository,
      PostTagRepository
    ]),
  ],
  controllers: [
    TagController
  ],
  providers: [
    TagService
  ]
})
export class TagModule {}
