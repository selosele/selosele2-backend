import { Module } from '@nestjs/common';
import { GuestbookService } from './services/guestbook.service';
import { GuestbookController } from './controllers/guestbook.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/database/CustomTypeOrmModule';
import { GuestbookEntity, GuestbookReplyEntity } from './models';
import { GuestbookRepository } from './repositories/guestbook.repository';
import { GuestbookReplyRepository } from './repositories/guestbook-reply.repository';
import { GuestbookReplyService } from './services/guestbook-reply.service';
import { GuestbookReplyController } from './controllers/guestbook-reply.controller';
import { NotificationService } from 'src/notification/services/notification.service';
import { NotificationRepository } from 'src/notification/repositories/notification.repository';
import { NotificationEntity } from 'src/notification/models';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GuestbookEntity,
      GuestbookReplyEntity,
      NotificationEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      GuestbookRepository,
      GuestbookReplyRepository,
      NotificationRepository
    ]),
  ],
  controllers: [
    GuestbookController,
    GuestbookReplyController
  ],
  providers: [
    GuestbookService,
    GuestbookReplyService,
    NotificationService
  ]
})
export class GuestbookModule {}
