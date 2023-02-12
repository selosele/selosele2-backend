import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Builder } from 'builder-pattern';
import { RoleRepository } from 'src/auth/repositories/role.repository';
import { startTransaction } from 'src/shared/utils';
import { DeleteResult, EntityManager, UpdateResult } from 'typeorm';
import { ListMenuDto, SaveMenuRoleDto, SaveMenuDto, MenuEntity, UpdateContentMenuDto } from '../models';
import { MenuRoleRepository } from '../repositories/menu-role.repository';
import { MenuRepository } from '../repositories/menu.repository';

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
    await startTransaction(async (em: EntityManager) => {

      // 1. 메뉴를 저장한다.
      menu = await em.withRepository(this.menuRepository).saveMenu(saveMenuDto);
  
      // 2. 기존의 메뉴 권한을 삭제한다.
      const removeMenuRoleDto: SaveMenuRoleDto = Builder(SaveMenuRoleDto)
                                                 .menuId(menu.id)
                                                 .build();
      await em.withRepository(this.menuRoleRepository).removeMenuRole(removeMenuRoleDto);
  
      let roles: SaveMenuRoleDto[] = [];
    
      if ('0' === saveMenuDto.role) {
        const roleList = await this.roleRepository.listRole();
        
        for (const role of roleList) {
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
  
      for (const role of roles) {

        // 3. 메뉴 권한을 추가한다.
        const addMenuRoleDto: SaveMenuRoleDto = Builder(SaveMenuRoleDto)
                                                .menuId(role.menuId)
                                                .roleId(role.roleId)
                                                .build();
        await em.withRepository(this.menuRoleRepository).saveMenuRole(addMenuRoleDto);
      }
    });

    return menu;
  }

  /** 메뉴를 삭제한다. */
  async removeMenu(id: number): Promise<DeleteResult> {
    let removeMenu: DeleteResult = null;

    // 트랜잭션을 시작한다.
    await startTransaction(async (em: EntityManager) => {

      // 1. 메뉴 권한을 삭제한다.
      const removeMenuRoleDto: SaveMenuRoleDto = Builder(SaveMenuRoleDto)
                                                 .menuId(id)
                                                 .build();
      await em.withRepository(this.menuRoleRepository).removeMenuRole(removeMenuRoleDto);
  
      // 2. 메뉴를 삭제한다.
      removeMenu = await em.withRepository(this.menuRepository).removeMenu(id);
    });

    return removeMenu;
  }

  /** 콘텐츠 연결메뉴를 수정한다. */
  async updateContentMenu(updateContentMenuDto: UpdateContentMenuDto): Promise<UpdateResult> {
    return await this.updateContentMenu(updateContentMenuDto);
  }

}
