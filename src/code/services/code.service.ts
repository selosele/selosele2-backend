import { Injectable } from '@nestjs/common';
import { Code } from '../models';
import { notificationCodes } from '@/notification/models';
import { satisfactionCodes } from '@/satisfaction/models';
import { globalCodes } from '@/shared/codes/code';
import { searchCodes } from '@/index-search/models';

@Injectable()
export class CodeService {
  
  /** 각 업무단의 공통코드 목록을 모아서 반환한다. */
  listCode(): Code[] {
    return [
      ...Object.values(globalCodes),
      ...Object.values(notificationCodes),
      ...Object.values(searchCodes),
      ...Object.values(satisfactionCodes),
    ].sort((a,b) => a.id.localeCompare(b.id)) as Code[];
  }

  /** 공통코드를 조회한다. */
  getCode(id: string): Code {
    return this.listCode().find(d => d.id === id);
  }

}
