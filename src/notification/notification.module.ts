import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/database/CustomTypeOrmModule';
import { NotificationController } from './controllers/notification.controller';
import { NotificationEntity } from './models';
import { NotificationRepository } from './repositories/notification.repository';
import { NotificationService } from './services/notification.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NotificationEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      NotificationRepository
    ]),
  ],
  controllers: [
    NotificationController
  ],
  providers: [
    NotificationService
  ]
})
export class NotificationModule {}
