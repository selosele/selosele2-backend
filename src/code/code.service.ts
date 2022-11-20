import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { CodeEntity } from './code.entity';
import { CodeRepository } from './code.repository';
import { RemoveCodetDto } from './dto/remove-code.dto';

@Injectable()
export class CodeService {
  
  constructor(
    @InjectRepository(CodeRepository)
    private readonly codeRepository: CodeRepository,
  ) {}

  // 코드 접두어와 매칭되는 공통코드 목록을 조회한다.
  async listCodeByPrefix(prefix: string): Promise<CodeEntity[]> {
    return await this.codeRepository.listCodeByPrefix(prefix);
  }

  // 공통코드 목록을 조회한다.
  async listCode(): Promise<CodeEntity[]> {
    return await this.codeRepository.listCode();
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
