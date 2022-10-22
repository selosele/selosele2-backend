import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchPostDto } from './dto/search-post.dto';
import { Post } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
  ) {}

  // 개수별 포스트 목록을 조회한다.
  async listPostByLimit(limit: number): Promise<Post[]> {
    return await this.postRepository.listPostByLimit(limit);
  }

  // 포스트를 검색한다.
  async listPostSearch(searchPostDto: SearchPostDto): Promise<Post[]> {
    return await this.postRepository.listPostSearch(searchPostDto);
  }

  // 포스트의 연도 및 개수를 조회한다.
  async listYearAndCount(): Promise<Post[]> {
    return await this.postRepository.listYearAndCount();
  }

  // 연도별 포스트 목록을 조회한다.
  async listPostByYear(year: string): Promise<Post[]> {
    return await this.postRepository.listPostByYear(year);
  }

}
