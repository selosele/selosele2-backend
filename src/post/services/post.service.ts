import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCategoryRepository } from 'src/category/repositories/post-category.repository';
import { PaginationDto } from 'src/shared/models';
import { getRawText, isEmpty, isNotEmpty, md } from 'src/shared/utils';
import { DeleteResult } from 'typeorm';
import { GetPostDto, ListPostDto, RemovePostDto, SearchPostDto, PostEntity } from '../models';
import { PostRepository } from '../repositories/post.repository';

@Injectable()
export class PostService {
  
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
    @InjectRepository(PostCategoryRepository)
    private readonly postCategoryRepository: PostCategoryRepository,
  ) {}

  /** 포스트 목록을 조회한다. */
  async listPost(listPostDto: ListPostDto): Promise<[PostEntity[], number]> {
    const [postList, postCategory] = await Promise.all([
      // 포스트 조회
      this.postRepository.listPost(listPostDto),
      // 카테고리 조회
      this.postCategoryRepository.listPostCategory(listPostDto),
    ]);

    postList[0].map(p => {
      // 포스트 데이타에 Markdown -> 순수 텍스트로 파싱한 결과물을 넣어준다.
      p.rawText = getRawText(p.cont).substring(0, 180);

      // 포스트 데이타에 카테고리 데이타를 넣어준다.
      p.postCategory = postCategory.filter(d => d.postId === p.id);
    });

    return [postList[0], postList[1]];
  }

  /** 개수별 포스트 목록을 조회한다. */
  async listPostByLimit(listPostDto: ListPostDto): Promise<PostEntity[]> {
    return await this.postRepository.listPostByLimit(listPostDto);
  }

  /** 포스트를 검색한다. */
  async listPostSearch(
    searchPostDto: SearchPostDto,
    paginationDto: PaginationDto
  ): Promise<[PostEntity[], number]> {
    const [post, postCategory] = await Promise.all([
      // 포스트 조회
      this.postRepository.listPostSearch(searchPostDto, paginationDto),
      // 카테고리 조회
      this.postCategoryRepository.listPostCategorySearch(searchPostDto, paginationDto),
    ]);

    post[0].map(p => {
      // 포스트 데이타에 Markdown -> 순수 텍스트로 파싱한 결과물을 넣어준다.
      p.rawText = getRawText(p.cont);

      // 포스트 데이타에 카테고리 데이타를 넣어준다.
      p.postCategory = postCategory.filter(d => d.postId === p.id);
    });

    return [post[0], post[1]];
  }

  /** 포스트의 연도 및 개수를 조회한다. */
  async listYearAndCount(listPostDto: ListPostDto): Promise<PostEntity[]> {
    return await this.postRepository.listYearAndCount(listPostDto);
  }

  /** 연도별 포스트 목록을 조회한다. */
  async listPostByYear(
    listPostDto: ListPostDto,
    paginationDto: PaginationDto
  ): Promise<[PostEntity[], number]> {
    return await this.postRepository.listPostByYear(listPostDto, paginationDto);
  }

  /** 카테고리별 포스트 목록을 조회한다. */
  async listPostByCategory(
    listPostDto: ListPostDto,
    paginationDto: PaginationDto
  ): Promise<[PostEntity[], number]> {
    return await this.postRepository.listPostByCategory(listPostDto, paginationDto);
  }

  /** 태그별 포스트 목록을 조회한다. */
  async listPostByTag(
    listPostDto: ListPostDto,
    paginationDto: PaginationDto
  ): Promise<[PostEntity[], number]> {
    return await this.postRepository.listPostByTag(listPostDto, paginationDto);
  }

  /** 이전/다음 포스트를 조회한다. */
  async listPrevAndNextPost(listPostDto: ListPostDto): Promise<PostEntity[]> {
    return await this.postRepository.listPrevAndNextPost(listPostDto);
  }

  /** 포스트를 조회한다. */
  async getPost(getPostDto: GetPostDto): Promise<PostEntity> {
    const post: PostEntity = await this.postRepository.getPost(getPostDto);

    if (isEmpty(post)) {
      throw new NotFoundException();
    }

    // 관리자 외 비밀글 조회를 방지한다.
    if (isNotEmpty(post) && 'N' === getPostDto.isLogin && 'Y' === post.secretYn) {
      throw new NotFoundException();
    }

    // 포스트의 콘텐츠를 Markdown으로 렌더링한다.
    post.cont = md.render(post.cont);

    return post;
  }

  /** 포스트 다건을 삭제한다. */
  async removePosts(removePostDto: RemovePostDto[]): Promise<DeleteResult> {
    let idList: number[] = [];

    removePostDto.forEach(d => {
      idList.push(d.id);
    });

    return await this.postRepository.removePosts(idList);
  }

  /** 포스트를 삭제한다. */
  async removePost(id: number): Promise<DeleteResult> {
    return await this.postRepository.removePost(id);
  }

}
