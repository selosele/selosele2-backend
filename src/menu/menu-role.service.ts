import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { SaveMenuRoleDto } from './dto/save-menu-role.dto';
import { MenuRoleEntity } from './entities/menu-role.entity';
import { MenuRoleRepository } from './menu-role.repository';

@Injectable()
export class MenuRoleService {

  constructor(
    @InjectRepository(MenuRoleRepository)
    private readonly menuRoleRepository: MenuRoleRepository,
  ) {}

  /** 메뉴 권한을 추가/수정한다. */
  async saveMenuRole(saveMenuRoleDto: SaveMenuRoleDto): Promise<MenuRoleEntity> {
    return await this.menuRoleRepository.saveMenuRole(saveMenuRoleDto);
  }

  /** 메뉴 권한을 삭제한다. */
  async removeMenuRole(saveMenuRoleDto: SaveMenuRoleDto): Promise<DeleteResult> {
    return await this.menuRoleRepository.removeMenuRole(saveMenuRoleDto);
  }

}
