import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCategoryRepository } from 'src/category/repositories/post-category.repository';
import { PaginationDto } from 'src/shared/models';
import { deserialize, getRawText, isBlank, isEmpty, isNotBlank, isNotEmpty, isNotFileEmpty, md, startTransaction } from 'src/shared/utils';
import { DeleteResult, EntityManager } from 'typeorm';
import { GetPostDto, ListPostDto, RemovePostDto, SearchPostDto, PostEntity } from '../models';
import { SavePostDto } from '../models/dto/save-post.dto';
import { PostRepository } from '../repositories/post.repository';
import * as sanitizeHtml from 'sanitize-html';
import { BlogConfigRepository } from 'src/blog-config/repositories/blog-config.repository';
import { BlogConfigEntity } from 'src/blog-config/models';
import { BizException } from 'src/shared/exceptions';
import { SavePostCategoryDto } from 'src/category/models/dto/save-post-category.dto';
import { Builder } from 'builder-pattern';
import { PostTagRepository } from 'src/tag/repositories/post-tag.repository';
import { SavePostTagDto } from 'src/tag/models/dto/save-post-tag.dto';
import { TagRepository } from 'src/tag/repositories/tag.repository';
import { SaveTagDto, TagEntity } from 'src/tag/models';
import { FileUploaderService } from 'src/file-uploader/services/file-uploader.service';
import { FileUploaderResponse } from 'src/file-uploader/models/file-uploader.model';

@Injectable()
export class PostService {
  
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
    @InjectRepository(PostCategoryRepository)
    private readonly postCategoryRepository: PostCategoryRepository,
    @InjectRepository(PostTagRepository)
    private readonly postTagRepository: PostTagRepository,
    @InjectRepository(TagRepository)
    private readonly tagRepository: TagRepository,
    @InjectRepository(BlogConfigRepository)
    private readonly blogConfigRepository: BlogConfigRepository,
    private readonly fileUploaderService: FileUploaderService,
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

  /** 포스트를 추가/수정한다. */
  async savePost(savePostDto: SavePostDto): Promise<PostEntity> {
    const { title, cont, ogImgFile, categoryId } = savePostDto;

    const isValid: boolean = await this.savePostValidationCheck(savePostDto);
    if (!isValid) return;

    // 포스트 내용 요약이 없으면 제목을 넣는다.
    if (isBlank(savePostDto.ogDesc)) {
      savePostDto.ogDesc = title;
    }

    // HTML Escape
    savePostDto.cont = sanitizeHtml(cont);

    // 대표 이미지 파일을 업로드한다.
    if (isNotFileEmpty(ogImgFile)) {
      const uploadFile: FileUploaderResponse = await this.fileUploaderService.uploadImage(ogImgFile);

      savePostDto.ogImg = uploadFile.public_id;
      savePostDto.ogImgUrl = uploadFile.url;
      savePostDto.ogImgSize = uploadFile.size;
    }

    let post: PostEntity = null;

    // 트랜잭션을 시작한다.
    await startTransaction(async (manager: EntityManager) => {

      // 먼저 포스트를 저장하고
      post = await manager.withRepository(this.postRepository).savePost(savePostDto);

      // 포스트 카테고리를 저장한다음
      const savePostCategoryDto: SavePostCategoryDto = Builder(SavePostCategoryDto)
                                                       .postId(post.id)
                                                       .categoryId(categoryId)
                                                       .build();
      await manager.withRepository(this.postCategoryRepository).addPostCategory(savePostCategoryDto);

      if (isNotBlank(savePostDto.saveTagList)) {
        const saveTagList: SaveTagDto[] = deserialize(Array<SaveTagDto>, savePostDto.saveTagList); // JSON -> Array 역직렬화

        for (let saveTag of saveTagList) {
          
          // 태그를 저장하고
          const saveTagDto: SaveTagDto = Builder(SaveTagDto)
                                         .nm(saveTag.nm)
                                         .build();
          const tag: TagEntity = await manager.withRepository(this.tagRepository).saveTag(saveTagDto);
  
          // 포스트 태그를 저장한다.
          const savePostTagDto: SavePostTagDto = Builder(SavePostTagDto)
                                                 .postId(post.id)
                                                 .tagId(tag.id)
                                                 .build();
          await manager.withRepository(this.postTagRepository).addPostTag(savePostTagDto);
        }
      }
    });

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

  /** 포스트 추가/수정 유효성 검사 */
  async savePostValidationCheck(savePostDto: SavePostDto): Promise<boolean> {
    const pinPostCount: number = await this.postRepository.count({ where: { pinYn: 'Y' } });
    const blogConfig: BlogConfigEntity = await this.blogConfigRepository.getBlogConfig();

    if ('Y' === savePostDto.pinYn) {
      if ((pinPostCount + 1) >= blogConfig.pageSize) {
        throw new BizException('허용 가능한 고정 글 개수에 도달했습니다.');
      }
    }

    return true;
  }

}
