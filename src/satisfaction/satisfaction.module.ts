import { Module } from '@nestjs/common';
import { SatisfactionService } from './services/satisfaction.service';
import { SatisfactionController } from './controllers/satisfaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SatisfactionEntity } from './models';
import { CustomTypeOrmModule } from 'src/configs/database/CustomTypeOrmModule';
import { SatisfactionRepository } from './repositories/satisfaction.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SatisfactionEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      SatisfactionRepository
    ]),
  ],
  controllers: [
    SatisfactionController
  ],
  providers: [
    SatisfactionService
  ]
})
export class SatisfactionModule {}
