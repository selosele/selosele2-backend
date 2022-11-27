import { CustomRepository } from 'src/configs/CustomRepository';
import { isNotEmpty } from 'src/shared/util/util';
import { DeleteResult, Repository } from 'typeorm';
import { CodeEntity } from './code.entity';
import { SaveCodetDto } from './dto/save-code.dto';

@CustomRepository(CodeEntity)
export class CodeRepository extends Repository<CodeEntity> {

  // 공통코드 목록을 조회한다.
  async listCode(prefix?: string): Promise<CodeEntity[]> {
    return await this.find({
      where: {
        ...(isNotEmpty(prefix) && { prefix }),
      },
      order: {
        id: 'ASC',
      },
    });
  }

  // 공통코드를 조회한다.
  async getCode(id: string): Promise<CodeEntity> {
    return await this.findOne({
      where: { id },
    });
  }

  // 공통코드를 추가/수정한다.
  async saveCode(saveCodeDto: SaveCodetDto): Promise<CodeEntity> {
    return await this.save(saveCodeDto);
  }

  // 공통코드를 삭제한다.
  async removeCode(id: string[]): Promise<DeleteResult> {
    return await this.delete(id);
  }

}
