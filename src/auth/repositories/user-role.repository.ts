import { InsertResult, Repository } from 'typeorm';
import { AuthCredentialsRoleDto, UserRoleEntity } from '../models';
import { CustomRepository } from '@/database/repository/custom-repository.decorator';

@CustomRepository(UserRoleEntity)
export class UserRoleRepository extends Repository<UserRoleEntity> {

  /** 사용자 권한을 생성한다. */
  async addUserRole(authCredentialsRoleDto: AuthCredentialsRoleDto): Promise<InsertResult> {
    return await this.insert(authCredentialsRoleDto);
  }

}
