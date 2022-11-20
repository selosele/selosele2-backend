import { Module } from '@nestjs/common';
import { GuestbookService } from './guestbook.service';
import { GuestbookController } from './guestbook.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { GuestbookEntity } from './guestbook.entity';
import { GuestbookRepository } from './guestbook.repository';
import { GuestbookReplyEntity } from './guestbook-reply.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuestbookEntity, GuestbookReplyEntity]),
    CustomTypeOrmModule.forCustomRepository([GuestbookRepository]),
  ],
  controllers: [GuestbookController],
  providers: [GuestbookService]
})
export class GuestbookModule {}
