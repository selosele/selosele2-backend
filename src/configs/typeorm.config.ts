import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'production' === process.env.NODE_ENV ? process.env.DB_HOST_PROD : process.env.DB_HOST,
  port: 'production' === process.env.NODE_ENV ? +process.env.DB_PORT_PROD : +process.env.DB_PORT,
  username: 'production' === process.env.NODE_ENV ? process.env.DB_USERNAME_PROD : process.env.DB_USERNAME,
  password: 'production' === process.env.NODE_ENV ? process.env.DB_PASSWORD_PROD : process.env.DB_PASSWORD,
  database: 'production' === process.env.NODE_ENV ? process.env.DB_DATEBASE_PROD : process.env.DB_DATEBASE,
  entities: ['dist/**/**/*.entity.{js,ts}'],
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
  timezone: '+09:00', //'Asia/Seoul'
  //logging: 'development' === process.env.NODE_ENV,
};
