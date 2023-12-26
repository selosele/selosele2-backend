import { Module } from '@nestjs/common';
import { ContentService } from './services/content.service';
import { ContentController } from './controllers/content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { ContentRepository } from './repositories/content.repository';
import { ContentEntity } from './models';
import { FileUploaderService } from '@/file-uploader/services/file-uploader.service';
import { MenuRepository } from '@/menu/repositories/menu.repository';
import { MenuEntity } from '@/menu/models';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      ContentEntity,
      MenuEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
      ContentRepository,
      MenuRepository,
    ]),
  ],
  controllers: [
    ContentController
  ],
  providers: [
    ContentService,
    FileUploaderService
  ]
})
export class ContentModule {}
