import { Module } from '@nestjs/common';
import { GuestbookService } from './guestbook.service';
import { GuestbookController } from './guestbook.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { Guestbook } from './guestbook.entity';
import { GuestbookRepository } from './guestbook.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Guestbook]),
    CustomTypeOrmModule.forCustomRepository([GuestbookRepository]),
  ],
  controllers: [GuestbookController],
  providers: [GuestbookService]
})
export class GuestbookModule {}
