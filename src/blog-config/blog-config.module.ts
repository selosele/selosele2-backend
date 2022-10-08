import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { BlogConfigController } from './blog-config.controller';
import { BlogConfig } from './blog-config.entity';
import { BlogConfigRepository } from './blog-config.repository';
import { BlogConfigService } from './blog-config.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BlogConfig]),
    CustomTypeOrmModule.forCustomRepository([BlogConfigRepository]),
  ],
  controllers: [BlogConfigController],
  providers: [BlogConfigService],
})
export class BlogConfigModule {}
