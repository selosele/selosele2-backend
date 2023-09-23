import { Module } from '@nestjs/common';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controllers/category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/database/CustomTypeOrmModule';
import { CategoryRepository } from './repositories/category.repository';
import { CategoryEntity, PostCategoryEntity } from './models';
import { PostCategoryRepository } from './repositories/post-category.repository';
import { TagRepository } from 'src/tag/repositories/tag.repository';
import { TagEntity } from 'src/tag/models';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryEntity,
      TagEntity,
      PostCategoryEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      CategoryRepository,
      TagRepository,
      PostCategoryRepository
    ]),
  ],
  controllers: [
    CategoryController
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule {}
