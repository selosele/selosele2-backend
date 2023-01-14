import { Module } from '@nestjs/common';
import { ContentService } from './services/content.service';
import { ContentController } from './controllers/content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/database/CustomTypeOrmModule';
import { ContentRepository } from './repositories/content.repository';
import { ContentEntity } from './models';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ContentEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      ContentRepository,
    ]),
  ],
  controllers: [
    ContentController
  ],
  providers: [
    ContentService
  ]
})
export class ContentModule {}
