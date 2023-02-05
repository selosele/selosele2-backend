import { CustomRepository } from "src/configs/database/CustomRepository";
import { isNotEmpty } from "src/shared/utils";
import { Repository, UpdateResult } from "typeorm";
import { PostReplyEntity } from "../models";
import { GetPostReplyDto } from "../models/dto/get-post-reply.dto";
import { ListPostReplyDto } from "../models/dto/list-post-reply.dto";
import { SavePostReplyDto } from "../models/dto/save-post-reply.dto";
import { UpdatePostReplySortDto } from "../models/dto/update-post-reply-sort.dto";

@CustomRepository(PostReplyEntity)
export class PostReplyRepository extends Repository<PostReplyEntity> {

  /** 모든 포스트 댓글 목록을 조회한다. */
  async listPostReplyAll(listPostReplyDto?: ListPostReplyDto): Promise<PostReplyEntity[]> {
    return await this.find({
      select: [
        'id', 'parentId', 'parentReplyId',
        'author', 'cont', 'regDate',
        'modDate', 'delYn', 'adminYn',
      ],
      where: {
        ...(isNotEmpty(listPostReplyDto.delYn) && {
          delYn: listPostReplyDto.delYn,
        }),
        ...(isNotEmpty(listPostReplyDto.adminYn) && {
          adminYn: listPostReplyDto.adminYn,
        }),
      },
      order: {
        id: 'DESC',
      },
    });
  }

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
        group: 'ASC',
        sort: 'ASC',
      },
    });
  }

  /** 포스트 댓글 개수를 조회한다. */
  async countPostReply(postId: number): Promise<number> {
    return await this.count({
      where: {
        parentId: postId,
        delYn: 'N',
      }
    });
  }

  /** 포스트 댓글을 조회한다. */
  async getPostReply(id: number): Promise<PostReplyEntity> {
    return await this.findOne({
      where: { id },
    });
  }

  /** 포스트 댓글을 추가/수정한다. */
  async savePostReply(savePostReplyDto: SavePostReplyDto): Promise<PostReplyEntity> {
    return await this.save(savePostReplyDto);
  }

  /** 포스트 댓글의 그룹을 수정한다. */
  async updatePostReplyGroup(id: number): Promise<UpdateResult> {
    return await this.update(id, {
      group: id,
      modDate: null,
    });
  }

  /** 포스트 댓글의 순서를 수정한다. */
  async updatePostReplySort(updatePostReplySortDto: UpdatePostReplySortDto): Promise<UpdateResult> {
    return await this.update(updatePostReplySortDto.id, {
      sort: updatePostReplySortDto.sort,
      modDate: null,
    });
  }

  /** 삭제된 포스트 댓글을 복구한다. */
  async updatePostReplyDelYn(savePostReplyDto: SavePostReplyDto): Promise<UpdateResult> {
    return await this.update(savePostReplyDto.id, {
      delYn: 'N',
    });
  }

  /** 마지막 포스트 댓글을 조회한다. */
  async getLastPostReply(getPostReplyDto: GetPostReplyDto): Promise<PostReplyEntity> {
    return await this.createQueryBuilder('postReply')
      .where("`group` = :group", { group: getPostReplyDto.group })
      .andWhere("id < :id", { id: getPostReplyDto.id })
      .orderBy("reg_date", "DESC")
      .limit(1)
      .getOne();
  }

}