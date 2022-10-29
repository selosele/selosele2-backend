import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CodeModule } from './code/code.module';
import { BlogConfigModule } from './blog-config/blog-config.module';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import { typeORMConfig } from './configs/typeorm.config';
import { WidgetModule } from './widget/widget.module';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';
import { SatisfactionModule } from './satisfaction/satisfaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule,
    CodeModule,
    BlogConfigModule,
    PostModule,
    WidgetModule,
    CategoryModule,
    TagModule,
    SatisfactionModule,
  ],
  providers: [],
})
export class AppModule {}
