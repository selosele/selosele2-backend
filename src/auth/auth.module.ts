import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/database/CustomTypeOrmModule';
import { UserRepository } from './repositories/user.repository';
import { UserRoleRepository } from './repositories/user-role.repository';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { ConfigService } from '@nestjs/config';
import { RoleEntity, UserRoleEntity, UserEntity } from './models';
import { RoleRepository } from './repositories/role.repository';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_ACCESS_SECRET_KEY'),
        signOptions: {
          expiresIn: +config.get<number>('JWT_ACCESS_EXPIRATION_TIME'),
        }
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([
      UserEntity,
      UserRoleEntity,
      RoleEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      UserRepository,
      UserRoleRepository,
      RoleRepository
    ]),
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    JwtAccessStrategy,
    JwtRefreshStrategy
  ],
  exports: [
    PassportModule,
    JwtAccessStrategy,
    JwtRefreshStrategy,
  ],
})
export class AuthModule {}
