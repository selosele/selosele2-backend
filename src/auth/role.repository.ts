import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@CustomRepository(Role)
export class RoleRepository extends Repository<Role> {}
