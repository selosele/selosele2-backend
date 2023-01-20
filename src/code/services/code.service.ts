import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmpty } from 'src/shared/utils';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CodeRepository } from '../repositories/code.repository';
import { SaveCodeDto, RemoveCodeDto, CodeEntity } from '../models';

@Injectable()
export class CodeService {
  
  constructor(
    @InjectRepository(CodeRepository)
    private readonly codeRepository: CodeRepository,
  ) {}

  /** 공통코드 목록을 조회한다. */
  async listCode(prefix?: string): Promise<CodeEntity[]> {
    return await this.codeRepository.listCode(prefix);
  }

  /** 공통코드를 조회한다. */
  async getCode(id: string): Promise<CodeEntity> {
    return await this.codeRepository.getCode(id);
  }

  /** 공통코드를 추가/수정한다. */
  async saveCode(saveCodeDto: SaveCodeDto): Promise<InsertResult | UpdateResult> {
    if (isEmpty(saveCodeDto?.originId)) {
      saveCodeDto.id = saveCodeDto.prefix + saveCodeDto.val;
      return await this.codeRepository.addCode(saveCodeDto);
    }

    saveCodeDto.id = saveCodeDto.originId;
    delete saveCodeDto.originId;
    
    return await this.codeRepository.updateCode(saveCodeDto);
  }

  /** 공통코드 다건을 삭제한다. */
  async removeCodes(removeCodeDto: RemoveCodeDto[]): Promise<DeleteResult> {
    let idList: string[] = [];

    removeCodeDto.forEach(d => {
      idList.push(d.id);
    });
    
    return await this.codeRepository.removeCodes(idList);
  }

}