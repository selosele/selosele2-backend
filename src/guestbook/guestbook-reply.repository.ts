import { CustomRepository } from "src/configs/CustomRepository";
import { Repository } from "typeorm";
import { AddGuestbookReplyDto } from "./dto/add-guestbook-reply.dto";
import { GuestbookReplyEntity } from "./guestbook-reply.entity";

@CustomRepository(GuestbookReplyEntity)
export class GuestbookReplyRepository extends Repository<GuestbookReplyEntity> {

  /** 방명록 댓글을 등록한다. */
  async addGuestbookReply(addGuestbookReplyDto: AddGuestbookReplyDto): Promise<GuestbookReplyEntity> {
    return await this.save(addGuestbookReplyDto);
  }

}
