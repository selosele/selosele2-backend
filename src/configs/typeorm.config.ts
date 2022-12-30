import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATEBASE,
  entities: ['dist/**/**/*.entity.{js,ts}'],
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
  timezone: '+09:00', //'Asia/Seoul'
  //logging: 'development' === process.env.NODE_ENV,
};
