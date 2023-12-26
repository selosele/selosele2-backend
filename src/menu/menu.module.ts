import { Module } from '@nestjs/common';
import { MenuService } from './services/menu.service';
import { MenuController } from './controllers/menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { MenuRepository } from './repositories/menu.repository';
import { MenuEntity, MenuRoleEntity } from './models';
import { MenuRoleRepository } from './repositories/menu-role.repository';
import { MenuRoleService } from './services/menu-role.service';
import { RoleRepository } from '@/auth/repositories/role.repository';
import { RoleEntity } from '@/auth/models';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      MenuEntity,
      MenuRoleEntity,
      RoleEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
      MenuRepository,
      MenuRoleRepository,
      RoleRepository,
    ]),
  ],
  controllers: [
    MenuController
  ],
  providers: [
    MenuService,
    MenuRoleService
  ]
})
export class MenuModule {}
