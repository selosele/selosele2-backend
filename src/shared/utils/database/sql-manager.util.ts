import { EntityManager } from "typeorm";
import { SqlManagerApi } from "./models/sql-manager.model";

/** SQL 실행 유틸 */
export function sqlManager(entityManager: EntityManager): SqlManagerApi {

  /** SQL을 실행한 결과를 반환한다. */
  const query = async <T>(sql: string, params?: any[]): Promise<T> => {
    return await entityManager.query(sql, params) as T;
  }

  /** SQL을 실행한 결과와 개수를 반환한다. */
  const queryAndCount = async <T>(sql: string, params?: any[]): Promise<[T[], number]> => {
    const res: T[] = await entityManager.query(sql, params) as T[];

    return [res, res.length];
  }

  return {
    query,
    queryAndCount,
  };

}
