import { IsNotEmpty } from 'class-validator';

/** 프로그램 그룹 삭제 DTO */
export class RemoveProgramDto {

  /** 프로그램 그룹 ID */
  @IsNotEmpty()
  id?: number;

}
