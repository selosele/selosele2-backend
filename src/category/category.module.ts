import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { CategoryEntity } from './entities/category.entity';
import { CategoryRepository } from './category.repository';
import { PostCategoryEntity } from './entities/post-category.entity';
import { PostCategoryRepository } from './post-category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryEntity,
      PostCategoryEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      CategoryRepository,
      PostCategoryRepository
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
