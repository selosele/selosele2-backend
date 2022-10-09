import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRole } from './user-role.entity';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { UserRepository } from './user.repository';
import { UserRoleRepository } from './user-role.repository';
import { JwtStrategy } from './jwt.strategy';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      }
    }),
    TypeOrmModule.forFeature([User, UserRole]),
    CustomTypeOrmModule.forCustomRepository([UserRepository, UserRoleRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
