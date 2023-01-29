import { CustomRepository } from "src/configs/database/CustomRepository";
import { Repository } from "typeorm";
import { PostReplyEntity } from "../models";
import { SavePostReplyDto } from "../models/dto/save-post-reply.dto";

@CustomRepository(PostReplyEntity)
export class PostReplyRepository extends Repository<PostReplyEntity> {

  /** 포스트 댓글 목록을 조회한다. */
  async listPostReply(postId: number): Promise<[PostReplyEntity[], number]> {
    return await this.findAndCount({
      select: [
        'id', 'parentId', 'parentReplyId',
        'group', 'sort', 'depth',
        'author', 'cont', 'regDate',
        'modDate', 'delYn', 'adminYn',
      ],
      where: {
        parentId: postId,
      },
      order: {
        id: 'ASC',
      },
    });
  }

  /** 포스트 댓글을 조회한다. */
  async getPostReply(id: number): Promise<PostReplyEntity> {
    return await this.findOne({
      where: { id },
    });
  }

  /** 포스트 댓글을 추가/수정/삭제한다. */
  async savePostReply(savePostReplyDto: SavePostReplyDto): Promise<PostReplyEntity> {
    return await this.save(savePostReplyDto);
  }

}