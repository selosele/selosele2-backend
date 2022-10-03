import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { CodeModule } from './code/code.module';
import { ConfigModule } from './config/config.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule,
    CodeModule,
    ConfigModule,
    PostModule,
  ],
})
export class AppModule {}
