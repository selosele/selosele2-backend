import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { MenuRepository } from './menu.repository';
import { MenuEntity } from './menu.entity';
import { MenuRoleEntity } from './menu-role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MenuEntity, MenuRoleEntity]),
    CustomTypeOrmModule.forCustomRepository([MenuRepository]),
  ],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
