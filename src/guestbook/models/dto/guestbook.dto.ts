import { GuestbookReplyDto } from './guestbook-reply.dto';

/** 방명록 DTO */
export class GuestbookDto {

  /** 방명록 ID */
  id?: number;

  /** 방명록 작성자 */
  author?: string;

  /** 방명록 작성자 비밀번호 */
  authorPw?: string;

  /** 방명록 내용 */
  cont?: string;

  /** 관리자 계정 여부 */
  adminYn?: string;

  /** 방명록 등록일시 */
  regDate?: Date;

  /** 방명록 수정일시 */
  modDate?: Date;

  /** 방명록 댓글 */
  guestbookReply?: GuestbookReplyDto[];
  
}
