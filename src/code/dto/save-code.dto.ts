import { IsNotEmpty, IsOptional } from 'class-validator';

/** 공통코드 추가/수정 DTO */
export class SaveCodetDto {

  /** 기존 코드 ID */
  @IsOptional()
  originId?: string;

  /** 코드 ID */
  @IsOptional()
  id?: string;

  /** 코드 접두어 */
  @IsNotEmpty()
  prefix?: string;

  /** 코드 값 */
  @IsNotEmpty()
  val?: string;

  /** 코드 명 */
  @IsNotEmpty()
  nm?: string;

  /** 코드 설명 */
  @IsNotEmpty()
  desc?: string;

  /** 코드 사용여부 */
  @IsNotEmpty()
  useYn?: string;

}
