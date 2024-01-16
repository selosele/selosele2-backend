import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgramDetailEntity, RemoveProgramDetailDto } from '../models';
import { ProgramDetailRepository } from '../repositories/program-detail.repository';
import { SaveProgramDetailDto } from '../models/dto/save-program-detail.dto';
import { DeleteResult } from 'typeorm';

@Injectable()
export class ProgramDetailService {

  constructor(
    @InjectRepository(ProgramDetailRepository)
    private readonly programDetailRepository: ProgramDetailRepository,
  ) {}

  /** 프로그램 상세 목록을 조회한다. */
  async listProgramDetail(parentId: number): Promise<ProgramDetailEntity[]> {
    return await this.programDetailRepository.listProgramDetail(parentId);
  }

  /** 프로그램 상세를 조회한다. */
  async getProgramDetail(id: number): Promise<ProgramDetailEntity> {
    return await this.programDetailRepository.getProgramDetail(id);
  }

  /** 프로그램 상세를 등록/수정한다. */
  async saveProgramDetail(saveProgramDetailDto: SaveProgramDetailDto): Promise<ProgramDetailEntity> {
    return await this.programDetailRepository.saveProgramDetail(saveProgramDetailDto);
  }

  /** 프로그램 상세 다건을 삭제한다. */
  async removeProgramDetails(removeProgramDetailDto: RemoveProgramDetailDto[]): Promise<DeleteResult> {
    let idList: number[] = [];

    removeProgramDetailDto.forEach(d => {
      idList.push(d.id);
    });

    return await this.programDetailRepository.removeProgramDetails(idList);
  }

}
