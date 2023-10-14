import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Builder } from "builder-pattern";
import { BizException } from "src/shared/exceptions";
import { compareEncrypt, encrypt, escapeHtml, isEmpty, isNotEmpty, startTransaction } from "src/shared/utils";
import { EntityManager, UpdateResult } from "typeorm";
import { PostEntity, PostReplyEntity, GetPostDto } from "../models";
import { SavePostReplyDto } from "../models/dto/save-post-reply.dto";
import { SavePostDto } from "../models/dto/save-post.dto";
import { PostReplyRepository } from "../repositories/post-reply.repository";
import { PostRepository } from "../repositories/post.repository";
import { UpdatePostReplySortDto } from "../models/dto/update-post-reply-sort.dto";
import { GetPostReplyDto } from "../models/dto/get-post-reply.dto";
import { ListPostReplyDto } from "../models/dto/list-post-reply.dto";
import { NotificationRepository } from "src/notification/repositories/notification.repository";
import { AddNotificationDto } from "src/notification/models";

@Injectable()
export class PostReplyService {
  
  constructor(
    @InjectRepository(PostReplyRepository)
    private readonly postReplyRepository: PostReplyRepository,
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
    @InjectRepository(NotificationRepository)
    private readonly notificationRepository: NotificationRepository,
  ) {}

  /** 모든 포스트 댓글 목록을 조회한다. */
  async listPostReplyAll(listPostReplyDto?: ListPostReplyDto): Promise<PostReplyEntity[]> {
    return await this.postReplyRepository.listPostReplyAll(listPostReplyDto);
  }

  /** 포스트 댓글 목록을 조회한다. */
  async listPostReply(postId: number): Promise<PostReplyEntity[]> {
    const replyList: PostReplyEntity[] = await this.postReplyRepository.listPostReply(postId);

    replyList.forEach(d => {

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

  /** 포스트 댓글을 등록/수정한다. */
  async savePostReply(savePostReplyDto: SavePostReplyDto): Promise<PostReplyEntity> {
    const { authorPw, cont, group, parentReplyId } = savePostReplyDto;
    
    // 상위 포스트를 조회한다.
    const getPostDto = Builder(GetPostDto)
                        .id(savePostReplyDto.parentId)
                        .build();
    const parentPost: PostEntity = await this.postRepository.getPost(getPostDto);

    // 임시저장 및 비밀 포스트에 인증되지 않은 사용자의 댓글 저장을 방지한다.
    if (this.isNotAllowedPost(savePostReplyDto, parentPost)) {
      throw new NotFoundException();
    }

    let res: PostReplyEntity = null;

    // 등록
    if ('E01001' === savePostReplyDto.crudType) {

      // 비밀번호 암호화
      savePostReplyDto.authorPw = await encrypt(authorPw);

      // HTML Escape
      savePostReplyDto.cont = escapeHtml(cont);

      // 트랜잭션을 시작한다.
      await startTransaction(async (em: EntityManager) => {

        // 1. 댓글을 등록한다
        res = await em.withRepository(this.postReplyRepository).savePostReply(savePostReplyDto);

        // 2. 포스트 댓글의 그룹을 수정한다.
        if (isEmpty(group)) {

          // 1 depth 댓글은 등록한 댓글의 ID 값을 group 값에 넣어주고, 2 depth 댓글은 상위 댓글의 ID 값을 group 값에 넣어준다.
          await em.withRepository(this.postReplyRepository).updatePostReplyGroup(res.id);
        }

        if (isNotEmpty(parentReplyId)) {

          // 3. 마지막 포스트 댓글을 조회한다.
          const getPostReplyDto = Builder(GetPostReplyDto)
                                  .id(res.id)
                                  .group(parentReplyId)
                                  .build();
          const lastPostReply: PostReplyEntity = await em.withRepository(this.postReplyRepository).getLastPostReply(getPostReplyDto);

          // 4. 포스트 댓글의 순서를 수정한다.
          const updatePostReplySortDto = Builder(UpdatePostReplySortDto)
                                          .id(res.id)
                                          .sort(lastPostReply.sort + 1)
                                          .build();
          await em.withRepository(this.postReplyRepository).updatePostReplySort(updatePostReplySortDto);
        }
  
        // 5. 댓글 개수를 조회한다.
        const postReplyCount: number = await em.withRepository(this.postReplyRepository).countPostReply(res.parentId);
        
        // 6. 상위 포스트의 댓글 개수 컬럼을 수정한다.
        const savePostDto = Builder(SavePostDto)
                            .id(res.parentId)
                            .replyCnt(postReplyCount)
                            .modDate(parentPost.modDate)
                            .build();
        await em.withRepository(this.postRepository).updatePostReplyCnt(savePostDto);

        // 7. 알림을 등록한다.
        if ('N' === savePostReplyDto.isLogin) {
          const addNotificationDto = Builder(AddNotificationDto)
                                      .cnncId(res.id)
                                      .typeCd('D02002')
                                      .link(`/post/${savePostReplyDto.parentId}#postReply${res.id}`)
                                      .senderIp(savePostReplyDto.ip)
                                      .senderNm(savePostReplyDto.author)
                                      .title(savePostReplyDto.title)
                                      .build();
          await em.withRepository(this.notificationRepository).addNotification(addNotificationDto);
        }
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
      savePostReplyDto.authorPw = await encrypt(authorPw);

      // HTML Escape
      savePostReplyDto.cont = escapeHtml(savePostReplyDto.cont);

      res = await this.postReplyRepository.savePostReply(savePostReplyDto);
    }
    // 삭제
    else if ('E01004' === savePostReplyDto.crudType) {
      res = await this.removePostReply(savePostReplyDto);
    }

    delete res.authorPw;

    return res;
  }

  /** 포스트 댓글을 삭제한다. */
  async removePostReply(savePostReplyDto: SavePostReplyDto): Promise<PostReplyEntity> {
    
    // 관리자가 아닌 경우는 비밀번호를 비교한다.
    if ('N' === savePostReplyDto.isLogin) {
      const { authorPw } = savePostReplyDto;
      const isValid: boolean = await this.compareAuthorPassword(savePostReplyDto);

      if (!isValid) {
        throw new BizException('비밀번호를 확인하세요.');
      }

      // 비밀번호 암호화
      savePostReplyDto.authorPw = await encrypt(authorPw);
    }

    // 상위 포스트를 조회한다.
    const getPostDto = Builder(GetPostDto)
                        .id(savePostReplyDto.parentId)
                        .build();
    const parentPost: PostEntity = await this.postRepository.getPost(getPostDto);

    let res: PostReplyEntity = null;

    // 트랜잭션을 시작한다.
    await startTransaction(async (em: EntityManager) => {

      // 1. 댓글을 삭제한다.
      savePostReplyDto.delYn = 'Y';
      res = await em.withRepository(this.postReplyRepository).savePostReply(savePostReplyDto);

      // 2. 댓글 개수를 조회한다.
      const postReplyCount: number = await em.withRepository(this.postReplyRepository).countPostReply(res.parentId);
      
      // 3. 상위 포스트의 댓글 개수 컬럼을 수정한다.
      const savePostDto = Builder(SavePostDto)
                          .id(res.parentId)
                          .replyCnt(postReplyCount)
                          .modDate(parentPost.modDate)
                          .build();
      await em.withRepository(this.postRepository).updatePostReplyCnt(savePostDto);
    });

    return res;
  }

  /** 포스트 댓글의 그룹을 수정한다. */
  async updatePostReplyGroup(id: number): Promise<UpdateResult> {
    return await this.postReplyRepository.updatePostReplyGroup(id);
  }

  /** 포스트 댓글의 순서를 수정한다. */
  async updatePostReplySort(updatePostReplySortDto: UpdatePostReplySortDto): Promise<UpdateResult> {
    return await this.postReplyRepository.updatePostReplySort(updatePostReplySortDto);
  }

  /** 삭제된 포스트 댓글을 복구한다. */
  async updatePostReplyDelYn(savePostReplyDto: SavePostReplyDto): Promise<UpdateResult> {
    let res: UpdateResult = null;

    // 트랜잭션을 시작한다.
    await startTransaction(async (em: EntityManager) => {

      // 1. 포스트 댓글의 삭제 여부 값을 N으로 변경한다.
      res = await em.withRepository(this.postReplyRepository).updatePostReplyDelYn(savePostReplyDto);

      // 2. 상위 포스트를 조회한다.
      const getPostDto = Builder(GetPostDto)
                          .id(savePostReplyDto.parentId)
                          .build();
      const parentPost: PostEntity = await em.withRepository(this.postRepository).getPost(getPostDto);

      // 3. 댓글 개수를 조회한다.
      const postReplyCount: number = await em.withRepository(this.postReplyRepository).countPostReply(savePostReplyDto.parentId);

      // 4. 상위 포스트의 댓글 개수 컬럼을 수정한다.
      const savePostDto = Builder(SavePostDto)
                          .id(savePostReplyDto.parentId)
                          .replyCnt(postReplyCount)
                          .modDate(parentPost.modDate)
                          .build();
      await em.withRepository(this.postRepository).updatePostReplyCnt(savePostDto);
    });

    return res;
  }

  /** 마지막 포스트 댓글을 조회한다. */
  async getLastPostReply(getPostReplyDto: GetPostReplyDto): Promise<PostReplyEntity> {
    return await this.postReplyRepository.getLastPostReply(getPostReplyDto);
  }

  /** 포스트 댓글 작성자의 비밀번호를 비교한다. */
  async compareAuthorPassword(savePostReplyDto: SavePostReplyDto): Promise<boolean> {
    const { id, authorPw } = savePostReplyDto;

    const foundPostReply: PostReplyEntity = await this.getPostReply(id);
    const matchPw = await compareEncrypt(authorPw, foundPostReply.authorPw);

    if (!matchPw) return false;

    return true;
  }

  /** 임시저장 및 비밀 포스트에 인증되지 않은 사용자의 댓글 저장을 방지한다. */
  private isNotAllowedPost(savePostReplyDto: SavePostReplyDto, parentPost: PostEntity): boolean {
    return 'N' === savePostReplyDto.isAdmin && ('Y' === parentPost.secretYn || 'Y' === parentPost.tmpYn);
  }

}