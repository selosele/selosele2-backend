import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CodeModule } from './code/code.module';
import { BlogConfigModule } from './blog-config/blog-config.module';
import { MenuModule } from './menu/menu.module';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import { typeORMConfig } from './configs/database/typeorm.config';
import { WidgetModule } from './widget/widget.module';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';
import { SatisfactionModule } from './satisfaction/satisfaction.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GuestbookModule } from './guestbook/guestbook.module';
import { ContentModule } from './content/content.module';
import { APP_FILTER } from '@nestjs/core';
import { BizExceptionFilter } from './shared/exceptions/biz/biz-exception-filter';
import { FileUploaderModule } from './file-uploader/file-uploader.module';
import { NotificationModule } from './notification/notification.module';
import { CacheDBModule } from './cache-db/cache-db.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: 'production' === process.env.NODE_ENV,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot(typeORMConfig),
    CacheDBModule,
    FileUploaderModule,
    AuthModule,
    CodeModule,
    BlogConfigModule,
    MenuModule,
    PostModule,
    WidgetModule,
    CategoryModule,
    TagModule,
    SatisfactionModule,
    GuestbookModule,
    ContentModule,
    NotificationModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: BizExceptionFilter,
    },
  ],
})
export class AppModule {}
