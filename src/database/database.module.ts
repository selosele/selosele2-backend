import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        type: 'mariadb',
        host: config.get<string>('DB_HOST'),
        port: +config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        entities: ['dist/**/**/**/*.entity.{js,ts}'],
        synchronize: false,
        namingStrategy: new SnakeNamingStrategy(),
        timezone: '+09:00', //'Asia/Seoul'
        //logging: ('development' === config.get<string>('NODE_ENV')),
      }),
      inject: [ConfigService],
    })
  ],
})
export class DatabaseModule {}
