import { IsOptional } from 'class-validator';

/** 프로그램 상세 등록/수정 DTO */
export class SaveProgramDetailDto {

  /** 프로그램 상세 ID */
  @IsOptional()
  id?: number;

  /** 프로그램 그룹 ID */
  @IsOptional()
  parentId?: number;

  /** 프로그램 명 */
  @IsOptional()
  nm?: string;

  /** 프로그램 명 */
  @IsOptional()
  method?: string;

  /** 요청 URL ROUTE PATH */
  @IsOptional()
  routePath?: string;

  /** 프로그램 사용 여부 */
  @IsOptional()
  useYn?: string;

}
