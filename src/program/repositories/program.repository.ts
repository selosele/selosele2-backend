import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { DeleteResult, Repository } from 'typeorm';
import { ProgramEntity } from '../models';

@CustomRepository(ProgramEntity)
export class ProgramRepository extends Repository<ProgramEntity> {

  /** 프로그램 그룹 목록을 조회한다. */
  async listProgram(): Promise<ProgramEntity[]> {
    return await this.find({
      order: {
        id: 'ASC',
      },
    });
  }

  /** 프로그램 그룹을 조회한다. */
  async getProgram(id: number): Promise<ProgramEntity> {
    return await this.findOne({
      relations: {
        programDetail: true,
      },
      where: { id },
    });
  }

  /** 프로그램 그룹 다건을 삭제한다. */
  async removePrograms(idList: number[]): Promise<DeleteResult> {
    return await this.delete(idList);
  }

}
