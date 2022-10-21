import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CodeModule } from './code/code.module';
import { BlogConfigModule } from './blog-config/blog-config.module';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import { typeORMConfig } from './configs/typeorm.config';

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
  ],
  providers: [],
})
export class AppModule {}
