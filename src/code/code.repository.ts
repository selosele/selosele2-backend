import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { Code } from './code.entity';

@CustomRepository(Code)
export class CodeRepository extends Repository<Code> {

  // 코드 접두어와 매칭되는 공통코드 목록을 조회한다.
  async listCodeByPrefix(prefix: string): Promise<Code[]> {
    return await this.find({
      where: { prefix },
    });
  }

  // 공통코드 목록을 조회한다.
  async listCode(): Promise<Code[]> {
    return await this.find({
      order: {
        id: 'ASC',
      },
    });
  }

}
