import { Module } from '@nestjs/common';
import { CodeModule } from './code/code.module';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { PostsModule } from './posts/posts.module';
import { YearModule } from './year/year.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    CodeModule,
    ConfigModule,
    PostsModule,
    YearModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
