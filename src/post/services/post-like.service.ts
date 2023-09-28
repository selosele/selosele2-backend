import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Builder } from "builder-pattern";
import { AddNotificationDto } from "src/notification/models";
import { NotificationRepository } from "src/notification/repositories/notification.repository";
import { BizException } from "src/shared/exceptions/biz/biz-exception";
import { startTransaction } from "src/shared/utils";
import { isEmpty } from "src/shared/utils/common/common.util";
import { DeleteResult, EntityManager } from "typeorm";
import { GetPostLikeDto, SavePostLikeDto, PostLikeEntity } from "../models";
import { PostLikeRepository } from "../repositories/post-like.repository";

@Injectable()
export class PostLikeService {
  
  constructor(
    @InjectRepository(PostLikeRepository)
    private readonly postLikeRepository: PostLikeRepository,
    @InjectRepository(NotificationRepository)
    private readonly notificationRepository: NotificationRepository,
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
      let res: PostLikeEntity = null;

      // 트랜잭션을 시작한다.
      await startTransaction(async (em: EntityManager) => {

        // 1. 추천을 등록한다.
        res = await em.withRepository(this.postLikeRepository).addPostLike(savePostLikeDto);
  
        // 2. 알림을 등록한다.
        const addNotificationDto = Builder(AddNotificationDto)
                                    .cnncId(res.id)
                                    .typeCd('D02001')
                                    .link(`/post/${savePostLikeDto.postId}`)
                                    .senderIp(savePostLikeDto.ip)
                                    .title(savePostLikeDto.title)
                                    .build();
        await em.withRepository(this.notificationRepository).addNotification(addNotificationDto);
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