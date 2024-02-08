import { isDev } from '@/shared/utils';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (env: ConfigService) => ({
        type: 'mariadb',
        host: env.get<string>('DB_HOST'),
        port: +env.get<number>('DB_PORT'),
        username: env.get<string>('DB_USERNAME'),
        password: env.get<string>('DB_PASSWORD'),
        database: env.get<string>('DB_DATABASE'),
        entities: ['dist/**/**/**/*.entity.{js,ts}'],
        synchronize: false,
        namingStrategy: new SnakeNamingStrategy(),
        timezone: '+09:00', //'Asia/Seoul'
        //logging: isDev(env.get<string>('NODE_ENV')),
      }),
      inject: [ConfigService],
    })
  ],
})
export class DatabaseModule {}
