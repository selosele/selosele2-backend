import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { ListTagDto, SaveTagDto, TagEntity } from '../models';
import { TagRepository } from '../repositories/tag.repository';

@Injectable()
export class TagService {

  constructor(
    @InjectRepository(TagRepository)
    private readonly tagRepository: TagRepository,
  ) {}

  /** 태그 목록 및 개수를 조회한다. */
  async listTagAndCount(listTagDto: ListTagDto): Promise<TagEntity[]> {
    return await this.tagRepository.listTagAndCount(listTagDto);
  }

  /** 태그를 조회한다. */
  async getTag(id: number): Promise<TagEntity> {
    return await this.tagRepository.getTag(id);
  }

  /** 태그를 추가/수정한다. */
  async saveTag(saveTagDto: SaveTagDto): Promise<TagEntity> {
    return await this.tagRepository.saveTag(saveTagDto);
  }

  /** 태그를 삭제한다. */
  async removeTag(id: number): Promise<DeleteResult> {
    return await this.tagRepository.removeTag(id);
  }

  /** 태그-포스트 계층형 구조를 조회한다. */
  async listTreeTagAndPost(): Promise<TagEntity[]> {
    return await this.tagRepository.listTreeTagAndPost();
  }

}
