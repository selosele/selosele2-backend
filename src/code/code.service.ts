import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmpty } from 'src/shared/util/util';
import { DeleteResult } from 'typeorm';
import { CodeEntity } from './code.entity';
import { CodeRepository } from './code.repository';
import { RemoveCodetDto } from './dto/remove-code.dto';
import { SaveCodetDto } from './dto/save-code.dto';

@Injectable()
export class CodeService {
  
  constructor(
    @InjectRepository(CodeRepository)
    private readonly codeRepository: CodeRepository,
  ) {}

  // 공통코드 목록을 조회한다.
  async listCode(prefix?: string): Promise<CodeEntity[]> {
    return await this.codeRepository.listCode(prefix);
  }

  // 공통코드를 조회한다.
  async getCode(id: string): Promise<CodeEntity> {
    return await this.codeRepository.getCode(id);
  }

  // 공통코드를 추가/수정한다.
  async saveCode(saveCodeDto: SaveCodetDto): Promise<CodeEntity> {
    if (isEmpty(saveCodeDto?.id)) {
      const { prefix, val } = saveCodeDto;
      saveCodeDto.id = prefix + val;
    }
    return await this.codeRepository.saveCode(saveCodeDto);
  }

  // 공통코드를 삭제한다.
  async removeCode(removeCodetDto: RemoveCodetDto[]): Promise<DeleteResult> {
    let idList = [];

    removeCodetDto.forEach(d => {
      idList.push(d.id);
    });
    
    return await this.codeRepository.removeCode(idList);
  }

}
