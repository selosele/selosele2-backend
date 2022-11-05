import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { PostTag } from './post-tag.entity';
import { Tag } from './tag.entity';

@CustomRepository(Tag)
export class TagRepository extends Repository<Tag> {

  // 태그 목록 및 개수를 조회한다.
  async listTagAndCount(): Promise<Tag[]> {
    return await this.createQueryBuilder('tag')
      .select("COUNT(*)", "count")
        .addSelect("tag.id", "id")
        .addSelect("tag.nm", "nm")
      .innerJoin(PostTag, "postTag", "tag.id = postTag.tag_id")
      .groupBy("tag.id")
        .addGroupBy("tag.nm")
      .orderBy("tag.nm", "ASC")
      .getRawMany();
  }

}
