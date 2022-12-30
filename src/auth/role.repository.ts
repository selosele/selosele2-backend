import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { RoleEntity } from './entities/role.entity';

@CustomRepository(RoleEntity)
export class RoleRepository extends Repository<RoleEntity> {}
