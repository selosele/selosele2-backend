import { CustomRepository } from 'src/configs/database/CustomRepository';
import { Repository } from 'typeorm';
import { BlogConfigEntity, UpdateBlogConfigDto } from '../models';

@CustomRepository(BlogConfigEntity)
export class BlogConfigRepository extends Repository<BlogConfigEntity> {

  /** 블로그 환경설정을 조회한다. */
  async getBlogConfig(): Promise<BlogConfigEntity> {
    return await this.findOne({
      where: { id: 1 }
    });
  }

  /** 블로그 환경설정을 수정한다. */
  async updateBlogConfig(updateBlogConfigDto: UpdateBlogConfigDto): Promise<BlogConfigEntity> {
    return await this.save(updateBlogConfigDto);
  }

}
