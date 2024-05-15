import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BizException } from '@/shared/exceptions';
import { compareEncrypt, encrypt, escapeHtml, isEmpty, isNotEmpty } from '@/shared/utils';
import { DataSource, EntityManager, UpdateResult } from 'typeorm';
import { PostEntity, PostReplyEntity, GetPostDto, ListPostReplyDto, SavePostReplyDto, GetPostReplyDto, UpdatePostReplySortDto, SavePostDto } from '../models';
import { PostReplyRepository } from '../repositories/post-reply.repository';
import { PostRepository } from '../repositories/post.repository';
import { NotificationRepository } from '@/notification/repositories/notification.repository';
import { AddNotificationDto, notificationCodes } from '@/notification/models';
import { globalCodes } from '@/shared/codes/code';
import { AuthService } from '@/auth/services/auth.service';
import { UserEntity } from '@/auth/models';

@Injectable()
export class PostReplyService {
  
  constructor(
    @InjectRepository(PostReplyRepository)
    private readonly postReplyRepository: PostReplyRepository,
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
    @InjectRepository(NotificationRepository)
    private readonly notificationRepository: NotificationRepository,
    private readonly authService: AuthService,
    private readonly dataSource: DataSource,
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
  async savePostReply(savePostReplyDto: SavePostReplyDto, userSn: number): Promise<PostReplyEntity> {
    const { cont, group, parentReplyId, adminYn } = savePostReplyDto;
    
    // 상위 포스트를 조회한다.
    const getPostDto: GetPostDto = {};
    getPostDto.id = savePostReplyDto.parentId;

    const parentPost: PostEntity = await this.postRepository.getPost(getPostDto);

    // 임시저장 및 비밀 포스트에 인증되지 않은 사용자의 댓글 저장을 방지한다.
    if (this.isNotAllowedPost(savePostReplyDto, parentPost)) {
      throw new NotFoundException();
    }

    // 관리자의 경우 관리자 비밀번호로 설정해준다.
    if ('Y' === adminYn) {
      const user: UserEntity = await this.authService.getUser(userSn);
      savePostReplyDto.authorPw = user.userPw;
    }

    let result: PostReplyEntity = null;

    // 등록
    if (globalCodes.CRUD_CREATE.id === savePostReplyDto.crudType) {

      // 비밀번호 암호화
      savePostReplyDto.authorPw = await encrypt(savePostReplyDto.authorPw);

      // HTML Escape
      savePostReplyDto.cont = escapeHtml(cont);

      // 트랜잭션을 시작한다.
      result = await this.dataSource.transaction<PostReplyEntity>(async (em: EntityManager) => {
        const postReplyRepository = em.withRepository(this.postReplyRepository);
        const postRepository = em.withRepository(this.postRepository);
        const notificationRepository = em.withRepository(this.notificationRepository);

        // 1. 댓글을 등록한다
        const postReply: PostReplyEntity = await postReplyRepository.savePostReply(savePostReplyDto);

        // 2. 포스트 댓글의 그룹을 수정한다.
        if (isEmpty(group)) {

          // 1 depth 댓글은 등록한 댓글의 ID 값을 group 값에 넣어주고, 2 depth 댓글은 상위 댓글의 ID 값을 group 값에 넣어준다.
          await postReplyRepository.updatePostReplyGroup(postReply.id);
        }

        if (isNotEmpty(parentReplyId)) {

          // 3. 마지막 포스트 댓글을 조회한다.
          const getPostReplyDto: GetPostReplyDto = {};
          getPostReplyDto.id = postReply.id;
          getPostReplyDto.group = parentReplyId;

          const lastPostReply: PostReplyEntity = await postReplyRepository.getLastPostReply(getPostReplyDto);

          // 4. 포스트 댓글의 순서를 수정한다.
          const updatePostReplySortDto: UpdatePostReplySortDto = {};
          updatePostReplySortDto.id = postReply.id;
          updatePostReplySortDto.sort = lastPostReply.sort + 1;

          await postReplyRepository.updatePostReplySort(updatePostReplySortDto);
        }
  
        // 5. 댓글 개수를 조회한다.
        const postReplyCount: number = await postReplyRepository.countPostReply(postReply.parentId);
        
        // 6. 상위 포스트의 댓글 개수 컬럼을 수정한다.
        const savePostDto: SavePostDto = {};
        savePostDto.id = postReply.parentId;
        savePostDto.replyCnt = postReplyCount;
        savePostDto.modDate = parentPost.modDate;

        await postRepository.updatePostReplyCnt(savePostDto);

        // 7. 알림을 등록한다.
        if ('N' === savePostReplyDto.isLogin) {
          const addNotificationDto: AddNotificationDto = {};
          addNotificationDto.cnncId = postReply.id;
          addNotificationDto.typeCd = notificationCodes.POST_REPLY.id;
          addNotificationDto.link = `/post/${savePostReplyDto.parentId}#postReply${postReply.id}`;
          addNotificationDto.senderIp = savePostReplyDto.ip;
          addNotificationDto.senderNm = savePostReplyDto.author;
          addNotificationDto.title = savePostReplyDto.title;

          await notificationRepository.addNotification(addNotificationDto);
        }
        return postReply;
      });
    }
    // 수정
    else if (globalCodes.CRUD_UPDATE.id === savePostReplyDto.crudType) {

      // 비밀번호 비교
      const isValid: boolean = await this.compareAuthorPassword(savePostReplyDto);

      if (!isValid) {
        throw new BizException('비밀번호를 확인하세요.');
      }

      // 비밀번호 암호화
      savePostReplyDto.authorPw = await encrypt(savePostReplyDto.authorPw);

      // HTML Escape
      savePostReplyDto.cont = escapeHtml(savePostReplyDto.cont);

      result = await this.postReplyRepository.savePostReply(savePostReplyDto);
    }
    // 삭제
    else if (globalCodes.CRUD_DELETE.id === savePostReplyDto.crudType) {
      result = await this.removePostReply(savePostReplyDto);
    }

    delete result.authorPw;

    return result;
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
    const getPostDto: GetPostDto = {};
    getPostDto.id = savePostReplyDto.parentId;

    const parentPost: PostEntity = await this.postRepository.getPost(getPostDto);

    // 트랜잭션을 시작한다.
    const result = await this.dataSource.transaction<PostReplyEntity>(async (em: EntityManager) => {
      const postReplyRepository = em.withRepository(this.postReplyRepository);
      const postRepository = em.withRepository(this.postRepository);

      // 1. 댓글을 삭제한다.
      savePostReplyDto.delYn = 'Y';
      const postReply: PostReplyEntity = await postReplyRepository.savePostReply(savePostReplyDto);

      // 2. 댓글 개수를 조회한다.
      const postReplyCount: number = await postReplyRepository.countPostReply(postReply.parentId);
      
      // 3. 상위 포스트의 댓글 개수 컬럼을 수정한다.
      const savePostDto: SavePostDto = {};
      savePostDto.id = postReply.parentId;
      savePostDto.replyCnt = postReplyCount;
      savePostDto.modDate = parentPost.modDate;

      await postRepository.updatePostReplyCnt(savePostDto);
      return postReply;
    });

    return result;
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

    // 트랜잭션을 시작한다.
    const result = await this.dataSource.transaction<UpdateResult>(async (em: EntityManager) => {
      const postReplyRepository = em.withRepository(this.postReplyRepository);
      const postRepository = em.withRepository(this.postRepository);

      // 1. 포스트 댓글의 삭제 여부 값을 N으로 변경한다.
      const updateRes: UpdateResult = await postReplyRepository.updatePostReplyDelYn(savePostReplyDto);

      // 2. 상위 포스트를 조회한다.
      const getPostDto: GetPostDto = {};
      getPostDto.id = savePostReplyDto.parentId;

      const parentPost: PostEntity = await postRepository.getPost(getPostDto);

      // 3. 댓글 개수를 조회한다.
      const postReplyCount: number = await postReplyRepository.countPostReply(savePostReplyDto.parentId);

      // 4. 상위 포스트의 댓글 개수 컬럼을 수정한다.
      const savePostDto: SavePostDto = {};
      savePostDto.id = savePostReplyDto.parentId;
      savePostDto.replyCnt = postReplyCount;
      savePostDto.modDate = parentPost.modDate;

      await postRepository.updatePostReplyCnt(savePostDto);
      return updateRes;
    });

    return result;
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
    return 'N' === savePostReplyDto.adminYn && ('Y' === parentPost.secretYn || 'Y' === parentPost.tmpYn);
  }

}