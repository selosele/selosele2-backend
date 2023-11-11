import { Injectable } from '@nestjs/common';
import { Code } from '../models';
import { NotificationCodes } from 'src/notification/models';
import { PostCodes } from 'src/post/models/codes/code';
import { SatisfactionCodes } from 'src/satisfaction/models';
import { GlobalCodes } from 'src/shared/codes/code';

@Injectable()
export class CodeService {
  
  /** 공통코드 목록을 조회한다. */
  listCode(): Code[] {
    return this.listAllCodes();
  }

  /** 공통코드를 조회한다. */
  getCode(id: string): Code {
    return this.listAllCodes().find(d => d.id === id);
  }

  /** 각 업무단의 공통코드 목록을 모아서 반환한다. */
  listAllCodes(): Code[] {
    return [
      ...Object.values(GlobalCodes),
      ...Object.values(NotificationCodes),
      ...Object.values(PostCodes),
      ...Object.values(SatisfactionCodes),
    ].sort((a,b) => a.id.localeCompare(b.id)) as Code[];
  }

}
