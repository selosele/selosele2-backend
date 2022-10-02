import { Module } from '@nestjs/common';
import { CodeModule } from './code/code.module';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { PostModule } from './post/post.module';
import { YearModule } from './year/year.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    CodeModule,
    ConfigModule,
    PostModule,
    YearModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
