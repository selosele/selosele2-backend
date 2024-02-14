import { Module } from '@nestjs/common';
import { GuestbookService } from './services/guestbook.service';
import { GuestbookController } from './controllers/guestbook.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { GuestbookEntity, GuestbookReplyEntity } from './models';
import { GuestbookRepository } from './repositories/guestbook.repository';
import { GuestbookReplyRepository } from './repositories/guestbook-reply.repository';
import { GuestbookReplyService } from './services/guestbook-reply.service';
import { GuestbookReplyController } from './controllers/guestbook-reply.controller';
import { NotificationService } from '@/notification/services/notification.service';
import { NotificationRepository } from '@/notification/repositories/notification.repository';
import { NotificationEntity } from '@/notification/models';
import { DatabaseModule } from '@/database/database.module';
import { AuthService } from '@/auth/services/auth.service';
import { UserRepository } from '@/auth/repositories/user.repository';
import { UserRoleRepository } from '@/auth/repositories/user-role.repository';
import { RoleRepository } from '@/auth/repositories/role.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      GuestbookEntity,
      GuestbookReplyEntity,
      NotificationEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
      GuestbookRepository,
      GuestbookReplyRepository,
      NotificationRepository,
      UserRepository,
      UserRoleRepository,
      RoleRepository
    ]),
  ],
  controllers: [
    GuestbookController,
    GuestbookReplyController
  ],
  providers: [
    GuestbookService,
    GuestbookReplyService,
    NotificationService,
    AuthService,
    JwtService
  ]
})
export class GuestbookModule {}
