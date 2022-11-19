import { CustomRepository } from "src/configs/CustomRepository";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { Repository } from "typeorm";
import { Guestbook } from "./guestbook.entity";

@CustomRepository(Guestbook)
export class GuestbookRepository extends Repository<Guestbook> {

  // 방명록 목록을 조회한다.
  async listGuestbook(paginationDto: PaginationDto): Promise<[Guestbook[], number]> {
    return await this.findAndCount({
      order: {
        regDate: 'DESC',
      },
      take: paginationDto.pageSize,
      skip: paginationDto.getSkipSize(),
    });
  }

}