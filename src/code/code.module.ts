import { Module } from '@nestjs/common';
import { CodeService } from './services/code.service';
import { CodeController } from './controllers/code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeEntity } from './models';
import { CustomTypeOrmModule } from 'src/configs/database/CustomTypeOrmModule';
import { CodeRepository } from './repositories/code.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CodeEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      CodeRepository
    ]),
  ],
  controllers: [
    CodeController
  ],
  providers: [
    CodeService
  ]
})
export class CodeModule {}
