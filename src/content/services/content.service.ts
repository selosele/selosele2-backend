import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmpty, md } from 'src/shared/utils';
import { DeleteResult } from 'typeorm';
import { RemoveContentDto, ContentEntity } from '../models';
import { GetContentDto } from '../models/dto/get-content.dto';
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

  /** 콘텐츠를 조회한다. */
  async getContent(getContentDto: GetContentDto): Promise<ContentEntity> {
    const content: ContentEntity = await this.contentRepository.getContent(getContentDto);

    if (isEmpty(content)) {
      throw new NotFoundException();
    }

    content.rawText = content.cont;

    // 콘텐츠의 내용을 Markdown으로 렌더링한다.
    content.cont = md.render(content.cont);

    return content;
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
