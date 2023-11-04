import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache, CachingConfig } from 'cache-manager';

@Injectable()
export class CacheDBService {

  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache
  ) {}

  /** 값을 조회한다. */
  async get<T>(key: string): Promise<T | undefined> {
    return this.cacheManager.get<T>(key);
  }

  /** 값을 설정한다. */
  async set(key: string, value: any, options?: CachingConfig): Promise<void> {
    return this.cacheManager.set(key, value, options);
  }

  /** 값을 삭제한다. */
  async del(key: string): Promise<void> {
    return this.cacheManager.del(key);
  }

  /** 값 목록을 조회한다. */
  async keys(pattern?: string): Promise<string[]> {
    return this.cacheManager.store.keys(pattern);
  }

}