import { CustomRepository } from 'src/configs/CustomRepository';
import { DeleteResult, Repository } from 'typeorm';
import { CodeEntity } from './code.entity';

@CustomRepository(CodeEntity)
export class CodeRepository extends Repository<CodeEntity> {

  // 코드 접두어와 매칭되는 공통코드 목록을 조회한다.
  async listCodeByPrefix(prefix: string): Promise<CodeEntity[]> {
    return await this.find({
      where: { prefix },
    });
  }

  // 공통코드 목록을 조회한다.
  async listCode(): Promise<CodeEntity[]> {
    return await this.find({
      order: {
        id: 'ASC',
      },
    });
  }

  // 공통코드를 삭제한다.
  async removeCode(id: string[]): Promise<DeleteResult> {
    return await this.delete(id);
  }

}
