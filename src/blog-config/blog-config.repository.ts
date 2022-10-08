import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { BlogConfig } from './blog-config.entity';

@CustomRepository(BlogConfig)
export class BlogConfigRepository extends Repository<BlogConfig> {

  // 블로그 환경설정 정보를 조회한다.
  async getBlogConfig(): Promise<BlogConfig> {
    return await this.findOne({ where: { id: 1 } });
  }

}
