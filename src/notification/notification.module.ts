import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { NotificationController } from './controllers/notification.controller';
import { NotificationEntity } from './models';
import { NotificationRepository } from './repositories/notification.repository';
import { NotificationService } from './services/notification.service';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      NotificationEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
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
