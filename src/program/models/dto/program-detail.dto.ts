/** 프로그램 상세 DTO */
export class ProgramDetailDto {

  /** 프로그램 상세 ID */
  id?: number;

  /** 프로그램 그룹 ID */
  parentId?: number;

  /** 프로그램 명 */
  nm?: string;

  /** 요청 메소드 */
  method?: string;

  /** 요청 URL ROUTE PATH */
  routePath?: string;

  /** 프로그램 사용 여부 */
  useYn?: string;

  /** 프로그램 등록일시 */
  regDate?: Date;

  /** 프로그램 수정일시 */
  modDate?: Date;
  
}
