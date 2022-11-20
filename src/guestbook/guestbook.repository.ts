import { CustomRepository } from "src/configs/CustomRepository";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { Repository } from "typeorm";
import { GuestbookEntity } from "./guestbook.entity";

@CustomRepository(GuestbookEntity)
export class GuestbookRepository extends Repository<GuestbookEntity> {

  // 방명록 목록을 조회한다.
  async listGuestbook(paginationDto: PaginationDto): Promise<[GuestbookEntity[], number]> {
    return await this.findAndCount({
      relations: {
        guestbookReply: true,
      },
      select: {
        id: true,
        author: true,
        cont: true,
        regDate: true,
        modDate: true,
        guestbookReply: {
          id: true,
          parentId: true,
          depth: true,
          author: true,
          cont: true,
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

}