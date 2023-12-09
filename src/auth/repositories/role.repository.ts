import { Repository } from 'typeorm';
import { CustomRepository } from '@/configs/database/CustomRepository';
import { RoleEntity } from '../models';

@CustomRepository(RoleEntity)
export class RoleRepository extends Repository<RoleEntity> {

  /** 권한 목록을 조회한다. */
  async listRole(): Promise<RoleEntity[]> {
    return await this.find();
  }

}
