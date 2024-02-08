import { CacheModule, CacheStore, Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { CacheDBService } from './services/cache-db.service';
 
export const cacheModule = CacheModule.registerAsync({
  useFactory: async (env: ConfigService) => ({
    store: redisStore as unknown as CacheStore,
    host: env.get<string>('REDIS_HOST'),
    port: env.get<string>('REDIS_PORT'),
    password: env.get<string>('REDIS_PASSWORD'),
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
