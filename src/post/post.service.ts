import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCategoryRepository } from 'src/category/post-category.repository';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ListPostDto } from './dto/list-post.dto';
import { SearchPostDto } from './dto/search-post.dto';
import { Post } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
    @InjectRepository(PostCategoryRepository)
    private readonly postCategoryRepository: PostCategoryRepository,
  ) {}

  // 포스트 목록을 조회한다.
  async listPost(listPostDto: ListPostDto): Promise<[Post[], number]> {
    const [post, postCategory] = await Promise.all([
      // 포스트 조회
      await this.postRepository.listPost(listPostDto),
      // 카테고리 조회
      await this.postCategoryRepository.listPostCategory(listPostDto),
    ]);

    // 포스트 데이타에 카테고리 데이타를 넣어준다.
    post[0].map(p => {
      p.postCategory = postCategory.filter(d => d.postId === p.id);
    });

    return [post[0], post[1]];
  }

  // 개수별 포스트 목록을 조회한다.
  async listPostByLimit(listPostDto: ListPostDto): Promise<Post[]> {
    return await this.postRepository.listPostByLimit(listPostDto);
  }

  // 포스트를 검색한다.
  async listPostSearch(
    searchPostDto: SearchPostDto,
    paginationDto: PaginationDto
  ): Promise<[Post[], number]> {
    const [post, postCategory] = await Promise.all([
      // 포스트 조회
      await this.postRepository.listPostSearch(searchPostDto, paginationDto),
      // 카테고리 조회
      await this.postCategoryRepository.listPostCategorySearch(searchPostDto, paginationDto),
    ]);

    // 포스트 데이타에 카테고리 데이타를 넣어준다.
    post[0].map(p => {
      p.postCategory = postCategory.filter(d => d.postId === p.id);
    });

    return [post[0], post[1]];
  }

  // 포스트의 연도 및 개수를 조회한다.
  async listYearAndCount(listPostDto: ListPostDto): Promise<Post[]> {
    return await this.postRepository.listYearAndCount(listPostDto);
  }

  // 연도별 포스트 목록을 조회한다.
  async listPostByYear(
    listPostDto: ListPostDto,
    paginationDto: PaginationDto
  ): Promise<[Post[], number]> {
    return await this.postRepository.listPostByYear(listPostDto, paginationDto);
  }

  // 카테고리별 포스트 목록을 조회한다.
  async listPostByCategory(
    listPostDto: ListPostDto,
    paginationDto: PaginationDto
  ): Promise<[Post[], number]> {
    return await this.postRepository.listPostByCategory(listPostDto, paginationDto);
  }

  // 태그별 포스트 목록을 조회한다.
  async listPostByTag(
    listPostDto: ListPostDto,
    paginationDto: PaginationDto
  ): Promise<[Post[], number]> {
    return await this.postRepository.listPostByTag(listPostDto, paginationDto);
  }

  // 포스트를 조회한다.
  async getPost(id: number): Promise<Post> {
    return await this.postRepository.getPost(id);
  }

}
