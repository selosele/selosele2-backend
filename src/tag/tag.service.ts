import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { TagRepository } from './tag.repository';

@Injectable()
export class TagService {

  constructor(
    @InjectRepository(TagRepository)
    private readonly tagRepository: TagRepository,
  ) {}

  // 태그 목록 및 개수를 조회한다.
  async listTagAndCount(): Promise<Tag[]> {
    return await this.tagRepository.listTagAndCount();
  }

}
