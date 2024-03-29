import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { PaginationDto } from '@/shared/models';
import { Repository } from 'typeorm';
import { AddGuestbookReplyDto, UpdateGuestbookReplyDto, ListGuestbookReplyDto, GuestbookReplyEntity } from '../models';

@CustomRepository(GuestbookReplyEntity)
export class GuestbookReplyRepository extends Repository<GuestbookReplyEntity> {

  /** 방명록 댓글 목록을 조회한다. */
  async listGuestbookReply(
    listGuestbookReplyDto: ListGuestbookReplyDto,
    paginationDto: PaginationDto
  ): Promise<[GuestbookReplyEntity[], number]> {
    return await this.findAndCount({
      relations: {
        guestbook: true,
      },
      select: {
        id: true,
        parentId: true,
        depth: true,
        author: true,
        cont: true,
        regDate: true,
        modDate: true,
        adminYn: true,
      },
      where: {
        parentId: listGuestbookReplyDto.parentId,
      },
      order: {
        regDate: 'ASC',
      },
      take: paginationDto.pageSize,
      skip: paginationDto.getSkipSize(),
    });
  }

  /** 방명록 댓글을 조회한다. */
  async getGuestbookReply(id: number): Promise<GuestbookReplyEntity> {
    return await this.findOne({
      where: { id },
    });
  }

  /** 방명록 댓글을 등록한다. */
  async addGuestbookReply(addGuestbookReplyDto: AddGuestbookReplyDto): Promise<GuestbookReplyEntity> {
    return await this.save(addGuestbookReplyDto);
  }

  /** 방명록 댓글을 수정한다. */
  async updateGuestbookReply(updateGuestbookReplyDto: UpdateGuestbookReplyDto): Promise<GuestbookReplyEntity> {
    return await this.save(updateGuestbookReplyDto);
  }

  /** 방명록 댓글을 삭제한다. */
  async removeGuestbookReply(removeGuestbookReplyDto: GuestbookReplyEntity): Promise<GuestbookReplyEntity> {
    return await this.remove(removeGuestbookReplyDto);
  }

}
