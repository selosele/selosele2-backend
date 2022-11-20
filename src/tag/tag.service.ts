import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListTagDto } from './dto/list-tag.dto';
import { TagEntity } from './tag.entity';
import { TagRepository } from './tag.repository';

@Injectable()
export class TagService {

  constructor(
    @InjectRepository(TagRepository)
    private readonly tagRepository: TagRepository,
  ) {}

  // 태그 목록 및 개수를 조회한다.
  async listTagAndCount(listTagDto: ListTagDto): Promise<TagEntity[]> {
    return await this.tagRepository.listTagAndCount(listTagDto);
  }

}
