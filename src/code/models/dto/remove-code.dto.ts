import { IsNotEmpty } from 'class-validator';

/** 공통코드 삭제 DTO */
export class RemoveCodeDto {

  /** 코드 ID */
  @IsNotEmpty()
  id?: string;

}
