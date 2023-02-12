import { Module } from '@nestjs/common';
import { SatisfactionService } from './services/satisfaction.service';
import { SatisfactionController } from './controllers/satisfaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SatisfactionEntity } from './models';
import { CustomTypeOrmModule } from 'src/configs/database/CustomTypeOrmModule';
import { SatisfactionRepository } from './repositories/satisfaction.repository';
import { NotificationService } from 'src/notification/services/notification.service';
import { NotificationEntity } from 'src/notification/models';
import { NotificationRepository } from 'src/notification/repositories/notification.repository';
import { HttpModule } from '@nestjs/axios';
import { BlogConfigRepository } from 'src/blog-config/repositories/blog-config.repository';
import { BlogConfigEntity } from 'src/blog-config/models';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SatisfactionEntity,
      NotificationEntity,
      BlogConfigEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      SatisfactionRepository,
      NotificationRepository,
      BlogConfigRepository
    ]),
    HttpModule
  ],
  controllers: [
    SatisfactionController
  ],
  providers: [
    SatisfactionService,
    NotificationService
  ]
})
export class SatisfactionModule {}
