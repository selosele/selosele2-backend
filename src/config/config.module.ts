import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { ConfigController } from './config.controller';
import { Config } from './config.entity';
import { ConfigRepository } from './config.repository';
import { ConfigService } from './config.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Config]),
    CustomTypeOrmModule.forCustomRepository([ConfigRepository]),
  ],
  controllers: [ConfigController],
  providers: [ConfigService],
})
export class ConfigModule {}
