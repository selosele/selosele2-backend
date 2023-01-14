/** SQL 실행 유틸 API */
export interface SqlManagerApi {

  /** SQL을 실행한 결과를 반환한다. */
  query<T>(sql: string, params?: any[]): Promise<T>;

  /** SQL을 실행한 결과와 개수를 반환한다. */
  queryAndCount<T>(sql: string, params?: any[]): Promise<[T[], number]>;
  
}
