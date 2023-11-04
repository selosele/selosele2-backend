import { Injectable } from '@nestjs/common';
import { Code, Codes } from '../models';

@Injectable()
export class CodeService {
  
  constructor() {}

  /** 공통코드 목록을 조회한다. */
  async listCode(): Promise<Code[]> {
    return Codes;
  }

  /** 공통코드를 조회한다. */
  async getCode(id: string): Promise<Code> {
    return Codes.find(d => d.id === id);
  }

}
