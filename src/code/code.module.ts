import { Module } from '@nestjs/common';
import { CodeService } from './services/code.service';
import { CodeController } from './controllers/code.controller';

@Module({
  controllers: [
    CodeController
  ],
  providers: [
    CodeService
  ]
})
export class CodeModule {}
