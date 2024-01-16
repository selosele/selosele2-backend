import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgramRepository } from '../repositories/program.repository';
import { ProgramEntity, RemoveProgramDto, SaveProgramDto } from '../models';
import { DeleteResult } from 'typeorm';

@Injectable()
export class ProgramService {

  constructor(
    @InjectRepository(ProgramRepository)
    private readonly programRepository: ProgramRepository,
  ) {}

  /** 프로그램 그룹 목록을 조회한다. */
  async listProgram(): Promise<ProgramEntity[]> {
    return await this.programRepository.listProgram();
  }

  /** 프로그램 그룹을 조회한다. */
  async getProgram(id: number): Promise<ProgramEntity> {
    return await this.programRepository.getProgram(id);
  }

  /** 프로그램 그룹을 등록/수정한다. */
  async saveProgram(saveProgramDto: SaveProgramDto): Promise<ProgramEntity> {
    return await this.programRepository.saveProgram(saveProgramDto);
  }
  
  /** 프로그램 그룹을 삭제한다. */
  async removeProgram(id: number): Promise<DeleteResult> {
    return await this.programRepository.removeProgram(id);
  }

  /** 프로그램 그룹 다건을 삭제한다. */
  async removePrograms(removeProgramDto: RemoveProgramDto[]): Promise<DeleteResult> {
    let idList: number[] = [];

    removeProgramDto.forEach(d => {
      idList.push(d.id);
    });
    
    return await this.programRepository.removePrograms(idList);
  }

}
