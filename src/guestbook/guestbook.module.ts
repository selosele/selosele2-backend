import { Module } from '@nestjs/common';
import { GuestbookService } from './services/guestbook.service';
import { GuestbookController } from './controllers/guestbook.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { GuestbookEntity, GuestbookReplyEntity } from './models';
import { GuestbookRepository } from './repositories/guestbook.repository';
import { GuestbookReplyRepository } from './repositories/guestbook-reply.repository';
import { GuestbookReplyService } from './services/guestbook-reply.service';
import { GuestbookReplyController } from './controllers/guestbook-reply.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GuestbookEntity,
      GuestbookReplyEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      GuestbookRepository,
      GuestbookReplyRepository
    ]),
  ],
  controllers: [
    GuestbookController,
    GuestbookReplyController
  ],
  providers: [
    GuestbookService,
    GuestbookReplyService
  ]
})
export class GuestbookModule {}
