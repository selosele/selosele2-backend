import { CustomRepository } from 'src/configs/CustomRepository';
import { isNotEmpty } from 'src/shared/util/util';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CodeEntity } from './code.entity';
import { SaveCodeDto } from './dto/save-code.dto';

@CustomRepository(CodeEntity)
export class CodeRepository extends Repository<CodeEntity> {

  /** 공통코드 목록을 조회한다. */
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

  /** 공통코드를 조회한다. */
  async getCode(id: string): Promise<CodeEntity> {
    return await this.findOne({
      where: { id },
    });
  }

  /** 공통코드를 추가한다. */
  async addCode(saveCodeDto: SaveCodeDto): Promise<InsertResult> {
    return await this.insert(saveCodeDto);
  }

  /** 공통코드를 수정한다. */
  async updateCode(saveCodeDto: SaveCodeDto): Promise<UpdateResult> {
    return await this.update({
      id: saveCodeDto.id
    }, saveCodeDto);
  }

  /** 공통코드 다건을 삭제한다. */
  async removeCodes(idList: string[]): Promise<DeleteResult> {
    return await this.delete(idList);
  }

}
