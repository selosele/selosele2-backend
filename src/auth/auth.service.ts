import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { InsertResult } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}
  
  // 사용자를 생성한다.
  async addUser(authCredentialsDto: AuthCredentialsDto): Promise<InsertResult> {
    return await this.userRepository.addUser(authCredentialsDto);
  }

}
