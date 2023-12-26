import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { DeleteResult, Repository } from 'typeorm';
import { SaveMenuRoleDto, MenuRoleEntity } from '../models';

@CustomRepository(MenuRoleEntity)
export class MenuRoleRepository extends Repository<MenuRoleEntity> {

  /** 메뉴 권한을 등록/수정한다. */
  async saveMenuRole(saveMenuRoleDto: SaveMenuRoleDto): Promise<MenuRoleEntity> {
    return await this.save(saveMenuRoleDto);
  }

  /** 메뉴 권한을 삭제한다. */
  async removeMenuRole(saveMenuRoleDto: SaveMenuRoleDto): Promise<DeleteResult> {
    return await this.delete(saveMenuRoleDto);
  }

}
