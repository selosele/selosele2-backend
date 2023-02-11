import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCategoryRepository } from 'src/category/repositories/post-category.repository';
import { PaginationDto } from 'src/shared/models';
import { deserialize, escapeHtml, getRawText, isBlank, isEmpty, isNotBlank, isNotEmpty, isNotFileEmpty, md, santinizeHtmlOption, startTransaction } from 'src/shared/utils';
import { DeleteResult, EntityManager, UpdateResult } from 'typeorm';
import { GetPostDto, ListPostDto, RemovePostDto, SearchPostDto, PostEntity } from '../models';
import { SavePostDto } from '../models/dto/save-post.dto';
import { PostRepository } from '../repositories/post.repository';
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
import { CountPostDto } from '../models/dto/count-post.dto';

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

  /** 메인 포스트 목록을 조회한다. */
  async listPostMain(listPostDto: ListPostDto): Promise<[PostEntity[], number]> {
    const [postList, postCategory] = await Promise.all([

      // 포스트 목록 조회
      this.postRepository.listPostMain(listPostDto),
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

  /** 포스트 목록을 조회한다. */
  async listPost(listPostDto: ListPostDto): Promise<[PostEntity[], number]> {
    const postList: [PostEntity[], number] = await this.postRepository.listPost(listPostDto);

    postList[0].map(p => {

      // 포스트 데이타에 Markdown -> 순수 텍스트로 파싱한 결과물을 넣어준다.
      p.rawText = getRawText(p.cont);

      // 포스트의 콘텐츠를 Markdown으로 렌더링한다.
      p.cont = md.render(p.cont);
    });

    return postList;
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
      
      // 포스트 목록 조회
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

    post.rawText = post.cont;

    // 포스트의 내용을 Markdown으로 렌더링한다.
    post.cont = md.render(post.cont);

    return post;
  }

  /** 포스트의 개수를 조회한다. */
  async countPost(countPostDto?: CountPostDto): Promise<number> {
    return await this.postRepository.countPost(countPostDto);
  }

  /** 포스트를 추가/수정한다. */
  async savePost(savePostDto: SavePostDto): Promise<PostEntity> {
    const { title, cont, ogImgFile, categoryId, delOgImg } = savePostDto;

    const isValid: boolean = await this.savePostValidationCheck(savePostDto);
    if (!isValid) return;

    // 포스트 내용 요약이 없으면 제목을 넣는다.
    if (isBlank(savePostDto.ogDesc)) {
      savePostDto.ogDesc = title;
    }

    // HTML Escape
    savePostDto.cont = escapeHtml(cont, santinizeHtmlOption);

    // 대표 이미지 파일을 업로드한다.
    if (isNotFileEmpty(ogImgFile) && !this.hasDelOgImg(delOgImg)) {
      const uploadFile: FileUploaderResponse = await this.fileUploaderService.uploadImage(ogImgFile);

      savePostDto.ogImg = uploadFile.public_id + '.' + uploadFile.format;
      savePostDto.ogImgUrl = uploadFile.url;
      savePostDto.ogImgSize = ogImgFile.size;
    }

    // 대표 이미지 정보를 삭제한다.
    if (this.hasDelOgImg(delOgImg)) {
      savePostDto.ogImg = null;
      savePostDto.ogImgUrl = null;
      savePostDto.ogImgSize = null;
    }

    let post: PostEntity = null;

    // 트랜잭션을 시작한다.
    await startTransaction(async (entityManager: EntityManager) => {

      // 1. 포스트를 저장한다.
      post = await entityManager.withRepository(this.postRepository).savePost(savePostDto);

      // 2. 포스트 카테고리를 저장한다.
      const savePostCategoryDto: SavePostCategoryDto = Builder(SavePostCategoryDto)
                                                       .postId(post.id)
                                                       .categoryId(categoryId)
                                                       .build();
      await entityManager.withRepository(this.postCategoryRepository).removePostCategory(savePostCategoryDto);
      await entityManager.withRepository(this.postCategoryRepository).savePostCategory(savePostCategoryDto);

      if (isNotBlank(savePostDto.saveTagList)) {
        const saveTagList: SaveTagDto[] = deserialize(Array<SaveTagDto>, savePostDto.saveTagList); // JSON -> Array 역직렬화

        // 3. 포스트 태그를 삭제한다.
        const removePostTagDto: SavePostTagDto = Builder(SavePostTagDto)
                                                 .postId(post.id)
                                                 .build();
        await entityManager.withRepository(this.postTagRepository).removePostTag(removePostTagDto);

        for (const saveTag of saveTagList) {

          // 4. 태그를 저장한다.
          const saveTagDto: SaveTagDto = Builder(SaveTagDto)
                                         .id(saveTag.id)
                                         .nm(saveTag.nm)
                                         .build();
          const tag: TagEntity = await entityManager.withRepository(this.tagRepository).saveTag(saveTagDto);

          // 5. 포스트 태그를 저장한다.
          const savePostTagDto: SavePostTagDto = Builder(SavePostTagDto)
                                                 .postId(post.id)
                                                 .tagId(tag.id)
                                                 .build();
          await entityManager.withRepository(this.postTagRepository).savePostTag(savePostTagDto);
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

  /** 포스트의 댓글 개수를 수정한다. */
  async updatePostReplyCnt(savePostDto: SavePostDto): Promise<UpdateResult> {
    return await this.postRepository.updatePostReplyCnt(savePostDto);
  }

  /** 포스트 추가/수정 유효성을 검사한다. */
  async savePostValidationCheck(savePostDto: SavePostDto): Promise<boolean> {
    const countPostDto: CountPostDto = Builder(CountPostDto)
                                       .pinYn('Y')
                                       .build();
    const pinPostCount: number = await this.countPost(countPostDto);
    const blogConfig: BlogConfigEntity = await this.blogConfigRepository.getBlogConfig();

    if ('Y' === savePostDto.pinYn) {
      if ((pinPostCount + 1) >= blogConfig.pageSize) {
        throw new BizException('고정 글의 개수를 확인하세요.');
      }
    }

    return true;
  }

  /** 미리보기 포스트 데이타를 가공한다.  */
  async getPreviewPost(savePostDto: SavePostDto): Promise<PostEntity> {

    // 포스트의 내용을 Markdown으로 렌더링한다.
    savePostDto.cont = md.render(savePostDto.cont);

    return <PostEntity>savePostDto;
  }

  /** 포스트 대표 이미지 파일 삭제 여부 값 존재를 확인한다. */
  private hasDelOgImg(delOgImg: string): boolean {
    return isNotBlank(delOgImg) && 'Y' === delOgImg;
  }

}
