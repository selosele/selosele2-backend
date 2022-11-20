import { CustomRepository } from 'src/configs/CustomRepository';
import { InsertResult, Repository } from 'typeorm';
import { AuthCredentialsRoleDto } from './dto/auth-credentials.dto';
import { UserRoleEntity } from './user-role.entity';

@CustomRepository(UserRoleEntity)
export class UserRoleRepository extends Repository<UserRoleEntity> {

  // 사용자 권한을 생성한다.
  async addUserRole(authCredentialsRoleDto: AuthCredentialsRoleDto): Promise<InsertResult> {
    return await this.insert(authCredentialsRoleDto);
  }

}
