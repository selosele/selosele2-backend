import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Builder } from "builder-pattern";
import { BizException } from "src/shared/exceptions";
import { startTransaction } from "src/shared/utils";
import { EntityManager } from "typeorm";
import { PostEntity, PostReplyEntity, GetPostDto } from "../models";
import { SavePostReplyDto } from "../models/dto/save-post-reply.dto";
import { SavePostDto } from "../models/dto/save-post.dto";
import { PostReplyRepository } from "../repositories/post-reply.repository";
import { PostRepository } from "../repositories/post.repository";
import * as bcrypt from 'bcrypt';
import * as sanitizeHtml from 'sanitize-html';
import { PostService } from "./post.service";

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

  /** 포스트 댓글을 조회한다. */
  async getPostReply(id: number): Promise<PostReplyEntity> {
    return await this.postReplyRepository.getPostReply(id);
  }

  /** 포스트 댓글을 추가/수정/삭제한다. */
  async savePostReply(savePostReplyDto: SavePostReplyDto): Promise<PostReplyEntity> {
    
    // 상위 포스트를 조회한다.
    const getPostDto: GetPostDto = Builder(GetPostDto)
                                   .id(savePostReplyDto.parentId)
                                   .build();
    const parentPost: PostEntity = await this.postService.getPost(getPostDto);

    // 임시저장 글, 비밀 글에 인증되지 않은 사용자의 댓글 저장을 방지한다.
    if (this.isNotAllowedPost(savePostReplyDto, parentPost)) {
      throw new NotFoundException();
    }

    let res: PostReplyEntity = null;

    // 추가
    if ('E01001' === savePostReplyDto.crudType) {

      // 트랜잭션을 시작한다.
      await startTransaction(async (entityManager: EntityManager) => {

        // HTML Escape
        savePostReplyDto.cont = sanitizeHtml(savePostReplyDto.cont);

        // 먼저 댓글을 추가한다음
        res = await entityManager.withRepository(this.postReplyRepository).savePostReply(savePostReplyDto);
  
        // 댓글 목록과 댓글 개수를 조회하고
        const postReply: [PostReplyEntity[], number] = await this.listPostReply(res.parentId);
        
        // 상위 포스트의 댓글 개수 컬럼을 UPDATE한다.
        const savePostDto: SavePostDto = Builder(SavePostDto)
                                         .id(res.parentId)
                                         .modDate(null)
                                         .replyCnt(postReply[1])
                                         .build();
        await entityManager.withRepository(this.postRepository).savePost(savePostDto);
      });
    }
    // 수정
    else if ('E01003' === savePostReplyDto.crudType) {
      const isValid: boolean = await this.compareAuthorPassword(savePostReplyDto);
      if (!isValid) {
        throw new BizException('비밀번호를 확인하세요.');
      }

      // HTML Escape
      savePostReplyDto.cont = sanitizeHtml(savePostReplyDto.cont);
      res = await this.postReplyRepository.savePostReply(savePostReplyDto);
    }
    // 삭제
    else if ('E01004' === savePostReplyDto.crudType) {
      res = await this.removePostReply(savePostReplyDto);
    }

    return res;
  }

  /** 포스트 댓글을 삭제한다. */
  async removePostReply(savePostReplyDto: SavePostReplyDto): Promise<PostReplyEntity> {

    // 관리자가 아닌 경우는 비밀번호를 비교한다.
    if ('N' === savePostReplyDto.isLogin) {
      const isValid: boolean = await this.compareAuthorPassword(savePostReplyDto);
      if (!isValid) {
        throw new BizException('비밀번호를 확인하세요.');
      }
    }

    let remove: PostReplyEntity = null;

    // 트랜잭션을 시작한다.
    await startTransaction(async (entityManager: EntityManager) => {

      // 먼저 댓글을 삭제하고
      savePostReplyDto.delYn = 'Y';
      remove = await entityManager.withRepository(this.postReplyRepository).savePostReply(savePostReplyDto);

      // 댓글 목록과 댓글 개수를 조회한다음
      const postReply: [PostReplyEntity[], number] = await this.listPostReply(remove.parentId);
      
      // 상위 포스트의 댓글 개수 컬럼을 UPDATE한다.
      const savePostDto: SavePostDto = Builder(SavePostDto)
                                       .id(remove.parentId)
                                       .modDate(null)
                                       .replyCnt(postReply[1])
                                       .build();
      await entityManager.withRepository(this.postRepository).savePost(savePostDto);
    });

    return remove;
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
  async isNotAllowedPost(savePostReplyDto: SavePostReplyDto, parentPost: PostEntity): Promise<boolean> {
    return 'N' === savePostReplyDto.isAdmin && ('Y' === parentPost.secretYn || 'Y' === parentPost.tmpYn);
  }

}