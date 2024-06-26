import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddNotificationDto, notificationCodes } from '@/notification/models';
import { NotificationRepository } from '@/notification/repositories/notification.repository';
import { BizException } from '@/shared/exceptions/biz/biz-exception';
import { isEmpty } from '@/shared/utils/common/common.util';
import { DataSource, DeleteResult, EntityManager } from 'typeorm';
import { GetPostLikeDto, SavePostLikeDto, PostLikeEntity } from '../models';
import { PostLikeRepository } from '../repositories/post-like.repository';

@Injectable()
export class PostLikeService {
  
  constructor(
    @InjectRepository(PostLikeRepository)
    private readonly postLikeRepository: PostLikeRepository,
    @InjectRepository(NotificationRepository)
    private readonly notificationRepository: NotificationRepository,
    private readonly dataSource: DataSource,
  ) {}

  /** 사용자 포스트 추천 정보를 조회한다. */
  async getPostLike(getPostLikeDto: GetPostLikeDto): Promise<PostLikeEntity> {
    return await this.postLikeRepository.getPostLike(getPostLikeDto);
  }

  /** 포스트를 추천/추천 해제한다. */
  async savePostLike(savePostLikeDto: SavePostLikeDto): Promise<number> {
    if ('Y' === savePostLikeDto.isLogin) {
      throw new BizException('관리자는 추천할 수 없습니다.');
    }

    // 추천 이력 조회
    const foundLike: PostLikeEntity = await this.getPostLike(savePostLikeDto);

    // 추천 이력이 없으면 추천을 하고
    if (isEmpty(foundLike)) {

      // 트랜잭션을 시작한다.
      await this.dataSource.transaction<void>(async (em: EntityManager) => {
        const postLikeRepository = em.withRepository(this.postLikeRepository);
        const notificationRepository = em.withRepository(this.notificationRepository);

        // 1. 추천을 등록한다.
        const postLike: PostLikeEntity = await postLikeRepository.addPostLike(savePostLikeDto);
  
        // 2. 알림을 등록한다.
        const addNotificationDto: AddNotificationDto = {};
        addNotificationDto.cnncId = postLike.id;
        addNotificationDto.typeCd = notificationCodes.POST_LIKE.id;
        addNotificationDto.link = `/post/${savePostLikeDto.postId}`;
        addNotificationDto.senderIp = savePostLikeDto.ip;
        addNotificationDto.title = savePostLikeDto.title;

        await notificationRepository.addNotification(addNotificationDto);
      });

      return 1;
    }
    
    // 추천 이력이 있으면 추천을 해제한다.
    const removePostLike: DeleteResult = await this.postLikeRepository.removePostLike(foundLike);
    if (0 < removePostLike.affected) {
      return -1;
    }
    return 0;
  }

}