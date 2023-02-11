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

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SatisfactionEntity,
      NotificationEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      SatisfactionRepository,
      NotificationRepository
    ]),
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
