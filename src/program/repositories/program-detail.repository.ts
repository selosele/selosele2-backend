import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { GetProgramDetailDto, ProgramDetailEntity } from '../models';
import { DeleteResult, Repository } from 'typeorm';
import { SaveProgramDetailDto } from '../models/dto/save-program-detail.dto';

@CustomRepository(ProgramDetailEntity)
export class ProgramDetailRepository extends Repository<ProgramDetailEntity> {

  /** 프로그램 상세 목록을 조회한다. */
  async listProgramDetail(parentId: number): Promise<ProgramDetailEntity[]> {
    return await this.find({
      where: { parentId },
      order: {
        id: 'ASC',
      },
    });
  }

  /** 프로그램 상세를 조회한다. */
  async getProgramDetail(getProgramDetailDto: GetProgramDetailDto): Promise<ProgramDetailEntity> {
    return await this.findOne({
      where: {
        id: getProgramDetailDto.id,
        method: getProgramDetailDto.method,
        routePath: getProgramDetailDto.routePath,
        useYn: getProgramDetailDto.useYn,
      },
    });
  }

  /** 프로그램 상세를 등록/수정한다. */
  async saveProgramDetail(saveProgramDetailDto: SaveProgramDetailDto): Promise<ProgramDetailEntity> {
    return await this.save(saveProgramDetailDto);
  }

  /** 프로그램 상세 다건을 삭제한다. */
  async removeProgramDetails(idList: number[]): Promise<DeleteResult> {
    return await this.delete(idList);
  }

}