import { IsNotEmpty } from 'class-validator';

/** 프로그램 상세 삭제 DTO */
export class RemoveProgramDetailDto {

  /** 프로그램 상세 ID */
  @IsNotEmpty()
  id?: number;

}
