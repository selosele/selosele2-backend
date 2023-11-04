import { Injectable } from '@nestjs/common';
import { CodeDto } from '../models';
import { Codes } from '../models/enums/code.enum';

@Injectable()
export class CodeService {
  
  constructor() {}

  /** 공통코드 목록을 조회한다. */
  async listCode(): Promise<CodeDto[]> {
    return Codes;
  }

  /** 공통코드를 조회한다. */
  async getCode(id: string): Promise<CodeDto> {
    return Codes.find(d => d.id === id);
  }

}
