import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { BlogConfigController } from './controllers/blog-config.controller';
import { BlogConfigEntity } from './models';
import { BlogConfigRepository } from './repositories/blog-config.repository';
import { BlogConfigService } from './services/blog-config.service';
import { FileUploaderService } from '@/file-uploader/services/file-uploader.service';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      BlogConfigEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
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
