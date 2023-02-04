import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Builder } from "builder-pattern";
import { BizException } from "src/shared/exceptions";
import { isEmpty, isNotEmpty, startTransaction } from "src/shared/utils";
import { EntityManager, UpdateResult } from "typeorm";
import { PostEntity, PostReplyEntity, GetPostDto } from "../models";
import { SavePostReplyDto } from "../models/dto/save-post-reply.dto";
import { SavePostDto } from "../models/dto/save-post.dto";
import { PostReplyRepository } from "../repositories/post-reply.repository";
import { PostRepository } from "../repositories/post.repository";
import * as bcrypt from 'bcrypt';
import * as sanitizeHtml from 'sanitize-html';
import { PostService } from "./post.service";
import { UpdatePostReplySortDto } from "../models/dto/update-post-reply-sort.dto";
import { GetPostReplyDto } from "../models/dto/get-post-reply.dto";

@Injectable()
export class PostReplyService {
  
  constructor(
    @InjectRepository(PostReplyRepository)
    private readonly postReplyRepository: PostReplyRepository,
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
    private readonly postService: PostService,
  ) {}

  /** 포스트 댓글 목록을 조회한다. */
  async listPostReply(postId: number): Promise<[PostReplyEntity[], number]> {
    const replyList: [PostReplyEntity[], number] = await this.postReplyRepository.listPostReply(postId);

    replyList[0].map(d => {

      // 삭제된 댓글인 경우
      if ('Y' === d.delYn) {
        d.cont = '삭제된 댓글입니다.';
      }
    });

    return replyList;
  }

  /** 포스트 댓글 개수를 조회한다. */
  async countPostReply(postId: number): Promise<number> {
    return await this.postReplyRepository.countPostReply(postId);
  }

  /** 포스트 댓글을 조회한다. */
  async getPostReply(id: number): Promise<PostReplyEntity> {
    return await this.postReplyRepository.getPostReply(id);
  }

  /** 포스트 댓글을 추가/수정한다. */
  async savePostReply(savePostReplyDto: SavePostReplyDto): Promise<PostReplyEntity> {
    const { authorPw, cont, group, parentReplyId } = savePostReplyDto;
    
    // 상위 포스트를 조회한다.
    const getPostDto: GetPostDto = Builder(GetPostDto)
                                   .id(savePostReplyDto.parentId)
                                   .build();
    const parentPost: PostEntity = await this.postService.getPost(getPostDto);

    // 임시저장 글, 비밀 글에 인증되지 않은 사용자의 댓글 저장을 방지한다.
    if (this.isNotAllowedPost(savePostReplyDto, parentPost)) {
      throw new NotFoundException();
    }

    let save: PostReplyEntity = null;

    // 추가
    if ('E01001' === savePostReplyDto.crudType) {

      // 비밀번호 암호화
      const salt = await bcrypt.genSalt();
      savePostReplyDto.authorPw = await bcrypt.hash(authorPw, salt);

      // HTML Escape
      savePostReplyDto.cont = sanitizeHtml(cont);

      // 트랜잭션을 시작한다.
      await startTransaction(async (entityManager: EntityManager) => {

        // 1. 댓글을 추가한다
        save = await entityManager.withRepository(this.postReplyRepository).savePostReply(savePostReplyDto);

        // 2. 포스트 댓글의 그룹을 수정한다.
        if (isEmpty(group)) {

          // 1 depth 댓글은 추가한 댓글의 ID 값을 group 값에 넣어주고, 2 depth 댓글은 상위 댓글의 ID 값을 group 값에 넣어준다.
          await entityManager.withRepository(this.postReplyRepository).updatePostReplyGroup(save.id);
        }

        if (isNotEmpty(parentReplyId)) {

          // 3. 마지막 포스트 댓글을 조회한다.
          const getPostReplyDto: GetPostReplyDto = Builder(GetPostReplyDto)
                                                   .id(save.id)
                                                   .group(parentReplyId)
                                                   .build();
          const lastPostReply: PostReplyEntity = await entityManager.withRepository(this.postReplyRepository).getLastPostReply(getPostReplyDto);

          // 4. 포스트 댓글의 순서를 수정한다.
          const updatePostReplySortDto: UpdatePostReplySortDto = Builder(UpdatePostReplySortDto)
                                                                 .id(save.id)
                                                                 .sort(lastPostReply.sort + 1)
                                                                 .build();
          await entityManager.withRepository(this.postReplyRepository).updatePostReplySort(updatePostReplySortDto);
        }
  
        // 5. 댓글 개수를 조회한다.
        const postReplyCount: number = await entityManager.withRepository(this.postReplyRepository).countPostReply(save.parentId);
        
        // 6. 상위 포스트의 댓글 개수 컬럼을 수정한다.
        const savePostDto: SavePostDto = Builder(SavePostDto)
                                         .id(save.parentId)
                                         .replyCnt(postReplyCount)
                                         .modDate(parentPost.modDate)
                                         .build();
        await entityManager.withRepository(this.postRepository).updatePostReplyCnt(savePostDto);
      });
    }
    // 수정
    else if ('E01003' === savePostReplyDto.crudType) {

      // 비밀번호 비교
      const isValid: boolean = await this.compareAuthorPassword(savePostReplyDto);
      if (!isValid) {
        throw new BizException('비밀번호를 확인하세요.');
      }

      // 비밀번호 암호화
      const salt = await bcrypt.genSalt();
      savePostReplyDto.authorPw = await bcrypt.hash(authorPw, salt);

      // HTML Escape
      savePostReplyDto.cont = sanitizeHtml(savePostReplyDto.cont);
      save = await this.postReplyRepository.savePostReply(savePostReplyDto);
    }
    // 삭제
    else if ('E01004' === savePostReplyDto.crudType) {
      save = await this.removePostReply(savePostReplyDto);
    }

    return save;
  }

  /** 포스트 댓글을 삭제한다. */
  async removePostReply(savePostReplyDto: SavePostReplyDto): Promise<PostReplyEntity> {
    const { authorPw } = savePostReplyDto;

    // 관리자가 아닌 경우는 비밀번호를 비교한다.
    if ('N' === savePostReplyDto.isLogin) {
      const isValid: boolean = await this.compareAuthorPassword(savePostReplyDto);
      if (!isValid) {
        throw new BizException('비밀번호를 확인하세요.');
      }
    }

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt();
    savePostReplyDto.authorPw = await bcrypt.hash(authorPw, salt);

    // 상위 포스트를 조회한다.
    const getPostDto: GetPostDto = Builder(GetPostDto)
                                   .id(savePostReplyDto.parentId)
                                   .build();
    const parentPost: PostEntity = await this.postService.getPost(getPostDto);

    let remove: PostReplyEntity = null;

    // 트랜잭션을 시작한다.
    await startTransaction(async (entityManager: EntityManager) => {

      // 1. 댓글을 삭제한다.
      savePostReplyDto.delYn = 'Y';
      remove = await entityManager.withRepository(this.postReplyRepository).savePostReply(savePostReplyDto);

      // 2. 댓글 개수를 조회한다.
      const postReplyCount: number = await entityManager.withRepository(this.postReplyRepository).countPostReply(remove.parentId);
      
      // 3. 상위 포스트의 댓글 개수 컬럼을 수정한다.
      const savePostDto: SavePostDto = Builder(SavePostDto)
                                       .id(remove.parentId)
                                       .replyCnt(postReplyCount)
                                       .modDate(parentPost.modDate)
                                       .build();
      await entityManager.withRepository(this.postRepository).updatePostReplyCnt(savePostDto);
    });

    return remove;
  }

  /** 포스트 댓글의 그룹을 수정한다. */
  async updatePostReplyGroup(id: number): Promise<UpdateResult> {
    return await this.postReplyRepository.updatePostReplyGroup(id);
  }

  /** 포스트 댓글의 순서를 수정한다. */
  async updatePostReplySort(updatePostReplySortDto: UpdatePostReplySortDto): Promise<UpdateResult> {
    return await this.postReplyRepository.updatePostReplySort(updatePostReplySortDto);
  }

  /** 마지막 포스트 댓글을 조회한다. */
  async getLastPostReply(getPostReplyDto: GetPostReplyDto): Promise<PostReplyEntity> {
    return await this.postReplyRepository.getLastPostReply(getPostReplyDto);
  }

  /** 포스트 댓글 작성자의 비밀번호를 비교한다. */
  async compareAuthorPassword(savePostReplyDto: SavePostReplyDto): Promise<boolean> {
    const { id, authorPw } = savePostReplyDto;

    const foundPostReply: PostReplyEntity = await this.getPostReply(id);
    const matchPw = await bcrypt.compare(authorPw, foundPostReply.authorPw);

    if (!matchPw) return false;

    return true;
  }

  /** 임시저장 글, 비밀 글에 인증되지 않은 사용자의 댓글 저장을 방지한다. */
  private isNotAllowedPost(savePostReplyDto: SavePostReplyDto, parentPost: PostEntity): boolean {
    return 'N' === savePostReplyDto.isAdmin && ('Y' === parentPost.secretYn || 'Y' === parentPost.tmpYn);
  }

}