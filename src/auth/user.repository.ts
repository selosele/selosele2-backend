import { CustomRepository } from 'src/configs/CustomRepository';
import { InsertResult, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@CustomRepository(User)
export class UserRepository extends Repository<User> {

  // 사용자를 조회한다.
  async getUser(userId: string): Promise<User> {
    return await this.createQueryBuilder('user')
      .select([
        'user.user_id',
        'user.reg_date',
        'userRole.role_id',
        'role.role_nm',
      ])
      .innerJoin('user.roles', 'userRole')
      .innerJoin('userRole.role', 'role')
      .where('user.user_id = :user_id', { user_id: userId })
      .getRawOne();
  }

  // 사용자를 생성한다.
  async addUser(authCredentialsDto: AuthCredentialsDto): Promise<InsertResult> {
    const { userId, userPw } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userPw, salt);

    const user = this.create({
      userId,
      userPw: hashedPassword,
    });

    try {
      return await this.insert(user);
    } catch (error) {
      if (error.sqlState === '23000') {
        throw new ConflictException('중복된 사용자 ID입니다.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

}
