import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 3305,
  username: 'root',
  password: 'root',
  database: 'blog2',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
};
