import { Module } from '@nestjs/common';
import { SatisfactionService } from './services/satisfaction.service';
import { SatisfactionController } from './controllers/satisfaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SatisfactionEntity } from './models';
import { CustomTypeOrmModule } from '@/configs/database/CustomTypeOrmModule';
import { SatisfactionRepository } from './repositories/satisfaction.repository';
import { NotificationService } from '@/notification/services/notification.service';
import { NotificationEntity } from '@/notification/models';
import { NotificationRepository } from '@/notification/repositories/notification.repository';
import { HttpModule } from '@nestjs/axios';
import { BlogConfigRepository } from '@/blog-config/repositories/blog-config.repository';
import { BlogConfigEntity } from '@/blog-config/models';

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
