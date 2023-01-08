import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { MenuRepository } from './menu.repository';
import { MenuEntity } from './entities/menu.entity';
import { MenuRoleEntity } from './entities/menu-role.entity';
import { MenuRoleRepository } from './menu-role.repository';
import { MenuRoleService } from './menu-role.service';
import { RoleRepository } from 'src/auth/role.repository';
import { RoleEntity } from 'src/auth/entities/role.entity';

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
