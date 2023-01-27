import { Expose, Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

/** 태그 추가/수정 DTO */
export class SaveTagDto {

  /** 태그 ID */
  @Expose()
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id?: number;

  /** 태그 명 */
  @Expose()
  @IsNotEmpty()
  nm?: string;

  /** 태그 추가 여부 */
  @Expose()
  @IsOptional()
  addTagYn: string;

}
