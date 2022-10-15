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
import { ConfigService } from '@nestjs/config';
import { Role } from './role.entity';
import { RoleRepository } from './role.repository';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET_KEY'),
        signOptions: {
          expiresIn: +config.get<number>('JWT_EXPIRATION_TIME'),
        }
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User, UserRole, Role]),
    CustomTypeOrmModule.forCustomRepository([UserRepository, UserRoleRepository, RoleRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
