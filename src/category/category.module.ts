import { Module } from '@nestjs/common';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controllers/category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { CategoryRepository } from './repositories/category.repository';
import { CategoryEntity, PostCategoryEntity } from './models';
import { PostCategoryRepository } from './repositories/post-category.repository';
import { TagRepository } from '@/tag/repositories/tag.repository';
import { TagEntity } from '@/tag/models';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      CategoryEntity,
      TagEntity,
      PostCategoryEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
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
