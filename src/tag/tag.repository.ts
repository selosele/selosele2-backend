import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { PostTag } from './post-tag.entity';
import { Tag } from './tag.entity';

@CustomRepository(Tag)
export class TagRepository extends Repository<Tag> {

  // 태그 목록 및 개수를 조회한다.
  async listTagAndCount(): Promise<Tag[]> {
    return await this.createQueryBuilder('tag')
      .select([
        'COUNT(*) AS count',
        'tag.id AS id',
        'tag.nm AS nm',
      ])
      .innerJoin(PostTag, 'post_tag', 'tag.id = post_tag.tag_id')
      .groupBy('tag.id')
      .addGroupBy('tag.nm')
      .orderBy('tag.nm', 'ASC')
      .getRawMany();
  }

}
