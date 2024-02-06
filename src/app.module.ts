import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CodeModule } from './code/code.module';
import { BlogConfigModule } from './blog-config/blog-config.module';
import { MenuModule } from './menu/menu.module';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import { WidgetModule } from './widget/widget.module';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';
import { SatisfactionModule } from './satisfaction/satisfaction.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GuestbookModule } from './guestbook/guestbook.module';
import { ContentModule } from './content/content.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { BizExceptionFilter } from './shared/exceptions/biz/biz-exception-filter';
import { FileUploaderModule } from './file-uploader/file-uploader.module';
import { NotificationModule } from './notification/notification.module';
import { CacheDBModule } from './cache-db/cache-db.module';
import { IndexSearchModule } from './index-search/index-search.module';
import { ProgramLogInterceptor } from './shared/interceptors/program-log.interceptor';
import { ProgramModule } from './program/program.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: ('production' === process.env.NODE_ENV),
    }),
    // 2024.01.10. 운영 환경에서 WAS, WEB 분리로 인한 주석 처리
    // 2024.01.11. 임시방편으로 WAS에 프론트엔드 빌드 디렉터리를 올리고, 추후 WEB 분리 시 주석 처리하기
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'client'),
    // }),
    // 2024.02.04. cron 비활성화
    //CronModule,
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
    IndexSearchModule,
    ProgramModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: BizExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ProgramLogInterceptor,
    },
  ],
})
export class AppModule {}
