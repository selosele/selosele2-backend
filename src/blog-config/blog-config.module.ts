import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from '@/configs/database/CustomTypeOrmModule';
import { BlogConfigController } from './controllers/blog-config.controller';
import { BlogConfigEntity } from './models';
import { BlogConfigRepository } from './repositories/blog-config.repository';
import { BlogConfigService } from './services/blog-config.service';
import { FileUploaderService } from '@/file-uploader/services/file-uploader.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BlogConfigEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      BlogConfigRepository
    ]),
  ],
  controllers: [
    BlogConfigController
  ],
  providers: [
    BlogConfigService,
    FileUploaderService
  ],
})
export class BlogConfigModule {}
