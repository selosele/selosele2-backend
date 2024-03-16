import { PostDto } from './post.dto';

/** 포스트 댓글 DTO */
export class PostReplyDto {

  /** 포스트 댓글 ID */
  id?: number;

  /** 상위 포스트 ID */
  parentId?: number;

  /** 상위 댓글 ID */
  parentReplyId?: number;

  /** 포스트 댓글 그룹 */
  group?: number;

  /** 포스트 댓글 순서 */
  sort?: number;

  /** 포스트 댓글 계층 */
  depth?: number;

  /** 포스트 댓글 작성자 */
  author?: string;

  /** 포스트 댓글 작성자 비밀번호 */
  authorPw?: string;

  /** 포스트 댓글 내용 */
  cont?: string;

  /** 포스트 댓글 등록일시 */
  regDate?: Date;

  /** 포스트 댓글 수정일시 */
  modDate?: Date;

  /** 포스트 댓글 삭제 여부 */
  delYn?: string;

  /** 관리자 계정 여부 */
  adminYn?: string;

  /** 포스트 */
  post?: PostDto;
  
}
