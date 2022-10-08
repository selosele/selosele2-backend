import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogConfig } from './blog-config.entity';
import { BlogConfigRepository } from './blog-config.repository';

@Injectable()
export class BlogConfigService {
  constructor(
    @InjectRepository(BlogConfigRepository)
    private readonly blogConfigRepository: BlogConfigRepository,
  ) {}

  // 블로그 환경설정 정보를 조회한다.
  async getBlogConfig(): Promise<BlogConfig> {
    return await this.blogConfigRepository.getBlogConfig();
  }
  
}
