import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'svc.gksl2.cloudtype.app',
  port: 31382,
  username: 'root',
  password: 'll32glc1dk38c',
  database: 'blog2',
  entities: ['dist/**/*.entity.{js,ts}'],
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
  timezone: '+09:00', //'Asia/Seoul'
  //logging: 'development' === process.env.NODE_ENV,
};
