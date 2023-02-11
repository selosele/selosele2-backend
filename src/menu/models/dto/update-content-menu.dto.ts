import { IsNotEmpty, MaxLength } from 'class-validator';

/** 콘텐츠 연결메뉴 수정 DTO */
export class UpdateContentMenuDto {

  /** 메뉴 명 */
  @IsNotEmpty()
  @MaxLength(50)
  name?: string;

  /** 메뉴 링크 */
  @IsNotEmpty()
  @MaxLength(255)
  link?: string;

}
