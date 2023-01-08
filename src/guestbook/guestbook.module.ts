import { Module } from '@nestjs/common';
import { GuestbookService } from './guestbook.service';
import { GuestbookController } from './guestbook.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { GuestbookEntity } from './entities/guestbook.entity';
import { GuestbookRepository } from './guestbook.repository';
import { GuestbookReplyEntity } from './entities/guestbook-reply.entity';
import { GuestbookReplyRepository } from './guestbook-reply.repository';
import { GuestbookReplyService } from './guestbook-reply.service';
import { GuestbookReplyController } from './guestbook-reply.controller';

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
