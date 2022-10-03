import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserRole } from 'src/user/user-role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRole])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
