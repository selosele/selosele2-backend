import { Module } from '@nestjs/common';
import { TagService } from './services/tag.service';
import { TagController } from './controllers/tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { TagEntity, PostTagEntity } from './models';
import { TagRepository } from './repositories/tag.repository';
import { PostTagRepository } from './repositories/post-tag.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TagEntity,
      PostTagEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
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
