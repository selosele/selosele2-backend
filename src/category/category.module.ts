import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';
import { PostCategory } from './post-category.entity';
import { PostCategoryRepository } from './post-category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, PostCategory]),
    CustomTypeOrmModule.forCustomRepository([CategoryRepository, PostCategoryRepository]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
