import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { UserRepository } from './repositories/user.repository';
import { UserRoleRepository } from './repositories/user-role.repository';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { ConfigService } from '@nestjs/config';
import { RoleEntity, UserRoleEntity, UserEntity } from './models';
import { RoleRepository } from './repositories/role.repository';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (env: ConfigService) => ({
        secret: env.get<string>('JWT_ACCESS_SECRET_KEY'),
        signOptions: {
          expiresIn: +env.get<number>('JWT_ACCESS_EXPIRATION_TIME'),
        }
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([
      UserEntity,
      UserRoleEntity,
      RoleEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
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
