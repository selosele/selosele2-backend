import { CustomRepository } from 'src/configs/database/CustomRepository';
import { InsertResult, Repository } from 'typeorm';
import { AuthCredentialsRoleDto, UserRoleEntity } from '../models';

@CustomRepository(UserRoleEntity)
export class UserRoleRepository extends Repository<UserRoleEntity> {

  /** 사용자 권한을 생성한다. */
  async addUserRole(authCredentialsRoleDto: AuthCredentialsRoleDto): Promise<InsertResult> {
    return await this.insert(authCredentialsRoleDto);
  }

}
