import { Module } from '@nestjs/common';
import { CodeService } from './code.service';
import { CodeController } from './code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Code } from './code.entity';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { CodeRepository } from './code.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Code]),
    CustomTypeOrmModule.forCustomRepository([CodeRepository]),
  ],
  controllers: [CodeController],
  providers: [CodeService]
})
export class CodeModule {}
