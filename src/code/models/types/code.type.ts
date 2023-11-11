/** 공통코드 Type */
export type Code = {

  /** 코드 ID */
  id?: string;

  /** 코드 접두어 */
  prefix?: string;

  /** 코드 값 */
  val?: string;

  /** 코드 명 */
  nm?: string;

  /** 코드 설명 */
  desc?: string;

  /** 코드 사용 여부 */
  useYn?: 'Y' | 'N';
  
}
