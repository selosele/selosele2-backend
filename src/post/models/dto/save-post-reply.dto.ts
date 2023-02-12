import { IsEmpty, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

/** 포스트 댓글 추가/수정/삭제 DTO */
export class SavePostReplyDto {

  /** 포스트 댓글 ID */
  @IsOptional()
  id?: number;

  /** 상위 포스트 ID */
  @IsNotEmpty()
  parentId?: number;

  /** 상위 포스트 댓글 ID */
  @IsOptional()
  parentReplyId?: number;

  /** 상위 포스트 제목 */
  @IsOptional()
  title?: string;

  /** 포스트 댓글 그룹 */
  @IsOptional()
  group?: number;

  /** 포스트 댓글 계층 */
  @IsOptional()
  depth?: number;

  /** 포스트 댓글 작성자 */
  @IsNotEmpty()
  @MaxLength(20)
  author?: string;

  /** 포스트 댓글 작성자 비밀번호 */
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(15)
  authorPw?: string;

  /** 포스트 댓글 작성자 IP */
  @IsEmpty()
  ip?: string;
  
  /** 포스트 댓글 내용 */
  @IsOptional()
  cont?: string;

  /** 포스트 댓글 삭제 여부 */
  @IsEmpty()
  delYn?: string;

  /** 관리자 계정 여부 */
  @IsEmpty()
  isAdmin?: string;

  /** 로그인 여부 */
  @IsEmpty()
  isLogin?: string;

  /** CRUD 유형 */
  @IsNotEmpty()
  crudType?: string;

}
