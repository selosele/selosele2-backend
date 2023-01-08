import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { BlogConfigController } from './blog-config.controller';
import { BlogConfigEntity } from './entities/blog-config.entity';
import { BlogConfigRepository } from './blog-config.repository';
import { BlogConfigService } from './blog-config.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BlogConfigEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      BlogConfigRepository
    ]),
  ],
  controllers: [BlogConfigController],
  providers: [BlogConfigService],
})
export class BlogConfigModule {}
