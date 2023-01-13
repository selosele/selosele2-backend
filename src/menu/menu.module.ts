import { Module } from '@nestjs/common';
import { MenuService } from './services/menu.service';
import { MenuController } from './controllers/menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { MenuRepository } from './repositories/menu.repository';
import { MenuEntity, MenuRoleEntity } from './models';
import { MenuRoleRepository } from './repositories/menu-role.repository';
import { MenuRoleService } from './services/menu-role.service';
import { RoleRepository } from 'src/auth/repositories/role.repository';
import { RoleEntity } from 'src/auth/models';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MenuEntity,
      MenuRoleEntity,
      RoleEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
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
