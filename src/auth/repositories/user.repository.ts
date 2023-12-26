import { Repository } from 'typeorm';
import { AuthCredentialsDto, UserEntity } from '../models';
import { CustomRepository } from '@/database/repository/custom-repository.decorator';

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

  /** 사용자를 조회한다. */
  async getUser(userKey: number | string): Promise<UserEntity> {
    return await this.findOne({
      relations: ['userRole'],
      select: {
        userSn: true,
        userId: true,
        userPw: true,
        regDate: true,
        enableYn: true,
        userRole: {
          roleId: true,
        },
      },
      where: [
        { userSn: userKey as number }, // or
        { userId: userKey as string },
      ],
    });
  }

  /** 사용자를 생성한다. */
  async addUser(authCredentialsDto: AuthCredentialsDto): Promise<UserEntity> {
    return await this.save(authCredentialsDto);
  }

}
