import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

/** 공통코드 추가/수정 DTO */
export class SaveCodeDto {

  /** 기존 코드 ID */
  @IsOptional()
  @MaxLength(6)
  originId?: string;

  /** 코드 ID */
  @IsOptional()
  @MaxLength(6)
  id?: string;

  /** 코드 접두어 */
  @IsNotEmpty()
  @MaxLength(3)
  prefix?: string;

  /** 코드 값 */
  @IsNotEmpty()
  @MaxLength(3)
  val?: string;

  /** 코드 명 */
  @IsNotEmpty()
  @MaxLength(30)
  nm?: string;

  /** 코드 설명 */
  @IsNotEmpty()
  @MaxLength(30)
  desc?: string;

  /** 코드 사용여부 */
  @IsNotEmpty()
  useYn?: string;

}
