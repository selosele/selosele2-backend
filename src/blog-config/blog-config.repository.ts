import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { BlogConfigEntity } from './blog-config.entity';

@CustomRepository(BlogConfigEntity)
export class BlogConfigRepository extends Repository<BlogConfigEntity> {

  // 블로그 환경설정 정보를 조회한다.
  async getBlogConfig(): Promise<BlogConfigEntity> {
    return await this.findOne({
      where: { id: 1 }
    });
  }

}
