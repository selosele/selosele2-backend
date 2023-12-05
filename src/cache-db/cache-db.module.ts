import { CacheModule, CacheStore, Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { CacheDBService } from './services/cache-db.service';
 
export const cacheModule = CacheModule.registerAsync({
  useFactory: async (config: ConfigService) => ({
    store: redisStore as unknown as CacheStore,
    host: config.get<string>('REDIS_HOST'),
    port: config.get<string>('REDIS_PORT'),
    password: config.get<string>('REDIS_PASSWORD'),
  }),
  inject: [ConfigService],
});
 
@Global()
@Module({
  imports: [cacheModule],
  providers: [CacheDBService],
  exports: [CacheDBService],
})
export class CacheDBModule {}
