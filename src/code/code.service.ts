import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Code } from './code.entity';
import { CodeRepository } from './code.repository';

@Injectable()
export class CodeService {
  
  constructor(
    @InjectRepository(CodeRepository)
    private readonly codeRepository: CodeRepository,
  ) {}

  // 코드 접두사와 매칭되는 공통코드 목록을 조회한다.
  async listByPrefix(prefix: string): Promise<Code[]> {
    return await this.codeRepository.listByPrefix(prefix);
  }

}
