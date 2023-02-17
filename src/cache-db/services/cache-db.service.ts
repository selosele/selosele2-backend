import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache, CachingConfig } from 'cache-manager';

@Injectable()
export class CacheDBService {

  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache
  ) {}

  async get<T>(key: string): Promise<T | undefined> {
    return this.cacheManager.get<T>(key);
  }

  async set(key: string, value: any, options?: CachingConfig): Promise<void> {
    return this.cacheManager.set(key, value, options);
  }

  async del(key: string): Promise<void> {
    return this.cacheManager.del(key);
  }

  async keys(pattern?: string): Promise<string[]> {
    return this.cacheManager.store.keys(pattern);
  }

}