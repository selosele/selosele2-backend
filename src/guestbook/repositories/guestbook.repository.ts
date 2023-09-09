import { CustomRepository } from "src/configs/database/CustomRepository";
import { PaginationDto } from "src/shared/models";
import { Repository } from "typeorm";
import { AddGuestbookDto, UpdateGuestbookDto, GuestbookEntity } from "../models";

@CustomRepository(GuestbookEntity)
export class GuestbookRepository extends Repository<GuestbookEntity> {

  /** 방명록 목록을 조회한다. */
  async listGuestbook(paginationDto: PaginationDto): Promise<[GuestbookEntity[], number]> {
    return await this.findAndCount({
      relations: {
        guestbookReply: true,
      },
      select: {
        id: true,
        author: true,
        cont: true,
        adminYn: true,
        regDate: true,
        modDate: true,
        guestbookReply: {
          id: true,
          parentId: true,
          depth: true,
          author: true,
          cont: true,
          adminYn: true,
          regDate: true,
          modDate: true,
        },
      },
      order: {
        regDate: 'DESC',
      },
      take: paginationDto.pageSize,
      skip: paginationDto.getSkipSize(),
    });
  }

  /** 방명록을 조회한다. */
  async getGuestbook(id: number): Promise<GuestbookEntity> {
    return await this.findOne({
      where: { id },
    });
  }

  /** 방명록을 등록한다. */
  async addGuestbook(addGuestbookDto: AddGuestbookDto): Promise<GuestbookEntity> {
    return await this.save(addGuestbookDto);
  }

  /** 방명록을 수정한다. */
  async updateGuestbook(updateGuestbookDto: UpdateGuestbookDto): Promise<GuestbookEntity> {
    return await this.save(updateGuestbookDto);
  }

  /** 방명록을 삭제한다. */
  async removeGuestbook(removeGuestbookDto: GuestbookEntity): Promise<GuestbookEntity> {
    return await this.remove(removeGuestbookDto);
  }

}