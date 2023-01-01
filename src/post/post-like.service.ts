import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BizException } from "src/shared/exceptions/biz.exception";
import { isEmpty } from "src/shared/utils/common/common.util";
import { DeleteResult, InsertResult } from "typeorm";
import { GetPostLikeDto } from "./dto/get-post-like.dto";
import { SavePostLikeDto } from "./dto/save-post-like.dto";
import { PostLikeEntity } from "./entities/post-like.entity";
import { PostLikeRepository } from "./post-like.repository";

@Injectable()
export class PostLikeService {
  
  constructor(
    @InjectRepository(PostLikeRepository)
    private readonly postLikeRepository: PostLikeRepository,
  ) {}

  /** 포스트 추천 정보를 조회한다. */
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
      const addPostLike: InsertResult = await this.postLikeRepository.addPostLike(savePostLikeDto);
      if (0 < addPostLike.raw.length) {
        return 1;
      }
      return 0;
    }
    // 추천 이력이 있으면 추천을 해제한다.
    const removePostLike: DeleteResult = await this.postLikeRepository.removePostLike(foundLike);
    if (0 < removePostLike.affected) {
      return -1;
    }
    return 0;
  }

}