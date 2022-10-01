import { EntityRepository, Repository } from 'typeorm';
import { Code } from './code.entity';

@EntityRepository(Code)
export class CodeRepository extends Repository<Code> {}
