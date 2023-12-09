import { dataSorce } from '@/configs/database/typeorm.config';
import { EntityManager } from 'typeorm';

/** 트랜잭션 유틸 */
export async function startTransaction(callback: (entityManager: EntityManager) => void): Promise<void> {
  await dataSorce.initialize();

  await dataSorce.transaction(async (entityManager: EntityManager) => {
    return callback(entityManager);
  });

  return await dataSorce.destroy();
}
