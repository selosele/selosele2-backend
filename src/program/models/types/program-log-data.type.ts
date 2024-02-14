import { ProgramDetailDto } from '../dto/program-detail.dto';

/** 프로그램 로그 출력 데이터 타입 */
export type ProgramLogData = {

  /** 요청 메소드 */
  method?: string;

  /** 요청 URL */
  url?: string;

  /** 요청 URL PATH */
  path?: string;

  /** 요청 URL ROUTE PATH */
  routePath?: string;

  /** 클라이언트 IP 주소 */
  ip?: string;

  statusCode?: number;

  /** 응답 코드 */
  message?: string;

  /** 사용자 일련번호 */
  userSn?: number;

  /** 프로그램 상세 */
  programDetail?: ProgramDetailDto;

}