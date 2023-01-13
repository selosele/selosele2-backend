import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { ListRoleDto, RoleEntity } from '../models';

@CustomRepository(RoleEntity)
export class RoleRepository extends Repository<RoleEntity> {

  /** 권한 목록을 조회한다. */
  async listRole(listRoleDto?: ListRoleDto): Promise<RoleEntity[]> {
    return await this.find({
      where: { delYn: listRoleDto?.delYn || 'N' },
    });
  }

}
