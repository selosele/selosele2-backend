import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { DeleteResult, Repository } from 'typeorm';
import { SavePostLikeDto, PostLikeEntity } from '../models';

@CustomRepository(PostLikeEntity)
export class PostLikeRepository extends Repository<PostLikeEntity> {

  /** 사용자 포스트 추천 정보를 조회한다. */
  async getPostLike(savePostLikeDto: SavePostLikeDto): Promise<PostLikeEntity> {
    return await this.findOne({
      select: ['id'],
      where: {
        postId: savePostLikeDto.postId,
        ip: savePostLikeDto.ip,
      },
    });
  }

  /** 포스트를 추천한다. */
  async addPostLike(savePostLikeDto: SavePostLikeDto): Promise<PostLikeEntity> {
    return await this.save(savePostLikeDto);
  }

  /** 포스트를 추천 해제한다. */
  async removePostLike(savePostLikeDto: SavePostLikeDto): Promise<DeleteResult> {
    return await this.delete(savePostLikeDto.id);
  }

}