import { Module } from '@nestjs/common';
import { SatisfactionService } from './satisfaction.service';
import { SatisfactionController } from './satisfaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SatisfactionEntity } from './entities/satisfaction.entity';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { SatisfactionRepository } from './satisfaction.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SatisfactionEntity]),
    CustomTypeOrmModule.forCustomRepository([SatisfactionRepository]),
  ],
  controllers: [SatisfactionController],
  providers: [SatisfactionService]
})
export class SatisfactionModule {}
