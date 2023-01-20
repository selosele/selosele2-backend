import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { RemoveContentDto, ContentEntity } from '../models';
import { ContentRepository } from '../repositories/content.repository';

@Injectable()
export class ContentService {

  constructor(
    @InjectRepository(ContentRepository)
    private readonly contentRepository: ContentRepository,
  ) {}

  /** 콘텐츠 목록을 조회한다. */
  async listContent(): Promise<ContentEntity[]> {
    return await this.contentRepository.listContent();
  }

  /** 콘텐츠를 다건을 삭제한다. */
  async removeContents(removeContentDto: RemoveContentDto[]): Promise<DeleteResult> {
    let idList: number[] = [];

    removeContentDto.forEach(d => {
      idList.push(d.id);
    });
    
    return await this.contentRepository.removeContents(idList);
  }

}