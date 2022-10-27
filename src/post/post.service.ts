import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
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
  async listPostByYear(year: string, paginationDto: PaginationDto): Promise<[Post[], number]> {
    return await this.postRepository.listPostByYear(year, paginationDto);
  }

  // 카테고리별 포스트 목록을 조회한다.
  async listPostByCategory(categoryId: number, paginationDto: PaginationDto): Promise<[Post[], number]> {
    return await this.postRepository.listPostByCategory(categoryId, paginationDto);
  }

  // 태그별 포스트 목록을 조회한다.
  async listPostByTag(tagId: number, paginationDto: PaginationDto): Promise<[Post[], number]> {
    return await this.postRepository.listPostByTag(tagId, paginationDto);
  }

}
