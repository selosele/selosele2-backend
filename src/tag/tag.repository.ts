import { CustomRepository } from 'src/configs/CustomRepository';
import { PostEntity } from 'src/post/post.entity';
import { DeleteResult, Repository } from 'typeorm';
import { ListTagDto } from './dto/list-tag.dto';
import { SaveTagDto } from './dto/save-tag.dto';
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

  /** 태그를 조회한다. */
  async getTag(id: number): Promise<TagEntity> {
    return await this.findOne({
      where: { id },
    });
  }

  /** 태그를 추가/수정한다. */
  async saveTag(saveTagDto: SaveTagDto): Promise<TagEntity> {
    return await this.save(saveTagDto);
  }

  /** 태그를 삭제한다. */
  async removeTag(id: number): Promise<DeleteResult> {
    return await this.delete(id);
  }

  /** 태그-포스트 계층형 구조를 조회한다. */
  async listTreeTagAndPost(): Promise<TagEntity[]> {
    return await this.createQueryBuilder('tag')
      .leftJoinAndSelect("tag.postTag", "postTag")
      .leftJoinAndSelect("postTag.post", "post")
      .orderBy("COUNT(postTag.tag_id) OVER (PARTITION BY postTag.tag_id)", "DESC")
        .addOrderBy("post.reg_date", "DESC")
      .getMany();
  }

}
