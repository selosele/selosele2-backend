import { GuestbookDto } from './guestbook.dto';

/** 방명록 댓글 DTO */
export class GuestbookReplyDto {

  /** 방명록 댓글 ID */
  id?: number;

  /** 상위 방명록 ID */
  parentId?: number;

  /** 방명록 댓글 계층 */
  depth?: number;

  /** 방명록 댓글 작성자 */
  author?: string;

  /** 방명록 댓글 작성자 비밀번호 */
  authorPw?: string;

  /** 방명록 댓글 내용 */
  cont?: string;

  /** 관리자 계정 여부 */
  adminYn?: string;

  /** 방명록 댓글 등록일시 */
  regDate?: Date;

  /** 방명록 댓글 수정일시 */
  modDate?: Date;

  /** 방명록 */
  guestbook?: GuestbookDto;
  
}
