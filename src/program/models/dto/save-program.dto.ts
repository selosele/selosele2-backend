import { IsNotEmpty, IsOptional } from 'class-validator';

/** 프로그램 그룹 등록/수정 DTO */
export class SaveProgramDto {

  /** 프로그램 그룹 ID */
  @IsOptional()
  id?: number;

  /** 프로그램 그룹 명 */
  @IsNotEmpty()
  nm?: string;

}
