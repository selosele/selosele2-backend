import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Builder } from 'builder-pattern';
import { RoleRepository } from 'src/auth/role.repository';
import { initTransaction } from 'src/shared/utils';
import { EntityManager } from 'typeorm';
import { ListMenuDto } from './dto/list-menu.dto';
import { SaveMenuRoleDto } from './dto/save-menu-role.dto';
import { SaveMenuDto } from './dto/save-menu.dto';
import { MenuEntity } from './entities/menu.entity';
import { MenuRoleRepository } from './menu-role.repository';
import { MenuRepository } from './menu.repository';

@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(MenuRepository)
    private readonly menuRepository: MenuRepository,
    @InjectRepository(MenuRoleRepository)
    private readonly menuRoleRepository: MenuRoleRepository,
    @InjectRepository(RoleRepository)
    private readonly roleRepository: RoleRepository,
  ) {}

  /** 계층형 메뉴 목록을 조회한다(최대 2depth). */
  async listTreeMenu(listMenuDto?: ListMenuDto): Promise<MenuEntity[]> {
    return await this.menuRepository.listTreeMenu(listMenuDto);
  }

  /** 메뉴를 조회한다. */
  async getMenu(id: number): Promise<MenuEntity> {
    return await this.menuRepository.getMenu(id);
  }

  /** 메뉴를 추가/수정한다. */
  async saveMenu(saveMenuDto: SaveMenuDto): Promise<MenuEntity> {
    let menu: MenuEntity = null;

    // 트랜잭션을 시작한다.
    await initTransaction(async (manager: EntityManager) => {

      // 먼저 메뉴를 저장하고
      menu = await manager.withRepository(this.menuRepository).saveMenu(saveMenuDto);
  
      // 기존의 메뉴 권한을 삭제한다.
      await manager.withRepository(this.menuRoleRepository).removeMenuRole(
        Builder(SaveMenuRoleDto)
          .menuId(menu.id)
          .build()
      );
  
      let roles: SaveMenuRoleDto[] = [];
    
      if ('0' === saveMenuDto.role) {
        const roleList = await this.roleRepository.listRole();
        
        for (let role of roleList) {
          // 선택한 값이 '모든 권한 허용'일 경우에는 모든 권한을 추가하고
          roles.push({
            menuId: menu.id,
            roleId: role.roleId,
          });
        }
      } else {
        // 그 외에는 선택한 권한을 추가한다.
        roles.push({
          menuId: menu.id,
          roleId: saveMenuDto.role,
        });
      }
  
      for (let role of roles) {
        // 메뉴 권한을 추가한다.
        await manager.withRepository(this.menuRoleRepository).saveMenuRole(
          Builder(SaveMenuRoleDto)
            .menuId(role.menuId)
            .roleId(role.roleId)
            .build()
        );
      }
    });

    return menu;
  }

  /** 메뉴를 삭제한다. */
  async removeMenu(saveMenuDto: MenuEntity): Promise<MenuEntity> {
    let removeMenu: MenuEntity = null;

    // 트랜잭션을 시작한다.
    await initTransaction(async (manager: EntityManager) => {

      // 먼저 메뉴 권한을 삭제하고
      await manager.withRepository(this.menuRoleRepository).removeMenuRole(
        Builder(SaveMenuRoleDto)
          .menuId(saveMenuDto.id)
          .build()
      );
  
      // 메뉴를 삭제한다.
      removeMenu = await manager.withRepository(this.menuRepository).removeMenu(saveMenuDto);
    });

    return removeMenu;
  }

}
