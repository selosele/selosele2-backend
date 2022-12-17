import { CustomRepository } from 'src/configs/CustomRepository';
import { PostEntity } from 'src/post/post.entity';
import { Repository } from 'typeorm';
import { ListTagDto } from './dto/list-tag.dto';
import { PostTagEntity } from './post-tag.entity';
import { TagEntity } from './tag.entity';

@CustomRepository(TagEntity)
export class TagRepository extends Repository<TagEntity> {

  /** 태그 목록 및 개수를 조회한다. */
  async listTagAndCount(listTagDto: ListTagDto): Promise<TagEntity[]> {
    let query = this.createQueryBuilder('tag')
      .select("COUNT(*)", "count")
        .addSelect("tag.id", "id")
        .addSelect("tag.nm", "nm")
      .innerJoin(PostTagEntity, "postTag", "tag.id = postTag.tag_id")
      .innerJoin(PostEntity, "post", "postTag.post_id = post.id");

    if ('N' === listTagDto?.isLogin) {
      query = query
        .where("post.secret_yn = 'N'");
    }

    query = query
      .groupBy("tag.id")
        .addGroupBy("tag.nm")
      .orderBy("tag.nm", "ASC");

    return await query.getRawMany();
  }

}
