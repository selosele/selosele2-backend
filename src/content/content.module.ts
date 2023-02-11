import { Module } from '@nestjs/common';
import { ContentService } from './services/content.service';
import { ContentController } from './controllers/content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/database/CustomTypeOrmModule';
import { ContentRepository } from './repositories/content.repository';
import { ContentEntity } from './models';
import { FileUploaderService } from 'src/file-uploader/services/file-uploader.service';
import { MenuRepository } from 'src/menu/repositories/menu.repository';
import { MenuEntity } from 'src/menu/models';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ContentEntity,
      MenuEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
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
