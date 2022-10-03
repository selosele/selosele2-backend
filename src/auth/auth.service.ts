import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { InsertResult } from 'typeorm';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}
  
  // 사용자를 생성한다.
  async addUser(authCredentialsDto: AuthCredentialsDto): Promise<InsertResult> {
    const { userId, userPw, roleId } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userPw, salt);

    const user = this.userRepository.create({
      userId,
      userPw: hashedPassword,
      roleId: 'ROLE_ADMIN'
    });

    try {
      return await this.userRepository.insert(user);
    } catch (error) {
      if (error.sqlState === '23000') {
        throw new ConflictException('중복된 사용자 ID입니다.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

}
