import { CustomRepository } from 'src/configs/CustomRepository';
import { InsertResult, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@CustomRepository(User)
export class UserRepository extends Repository<User> {

  // 사용자를 조회한다.
  async getUser(userSn: number): Promise<User> {
    return await this.createQueryBuilder('user')
      .select([
        'user.user_sn',
        'user.user_id',
        'user.reg_date',
        'userRole.role_id',
        'role.role_nm',
      ])
      .innerJoin('user.roles', 'userRole')
      .innerJoin('userRole.role', 'role')
      .where('user.user_sn = :user_sn', { user_sn: userSn })
      .getRawOne();
  }

  // 사용자를 생성한다.
  async addUser(authCredentialsDto: AuthCredentialsDto): Promise<InsertResult> {
    return await this.insert(authCredentialsDto);
  }

}
