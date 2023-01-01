import { CustomRepository } from 'src/configs/CustomRepository';
import { DeleteResult, Repository } from 'typeorm';
import { SaveMenuRoleDto } from './dto/save-menu-role.dto';
import { MenuRoleEntity } from './entities/menu-role.entity';

@CustomRepository(MenuRoleEntity)
export class MenuRoleRepository extends Repository<MenuRoleEntity> {

  /** 메뉴 권한을 추가/수정한다. */
  async saveMenuRole(saveMenuRoleDto: SaveMenuRoleDto): Promise<MenuRoleEntity> {
    return await this.save(saveMenuRoleDto);
  }

  /** 메뉴 권한을 삭제한다. */
  async removeMenuRole(saveMenuRoleDto: SaveMenuRoleDto): Promise<DeleteResult> {
    return await this.delete(saveMenuRoleDto);
  }

}
