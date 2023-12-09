import { Module } from '@nestjs/common';
import { WidgetService } from './services/widget.service';
import { WidgetController } from './controllers/widget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from '@/configs/database/CustomTypeOrmModule';
import { WidgetEntity } from './models';
import { WidgetRepository } from './repositories/widget.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      WidgetEntity
    ]),
    CustomTypeOrmModule.forCustomRepository([
      WidgetRepository
    ]),
  ],
  controllers: [
    WidgetController
  ],
  providers: [
    WidgetService
  ]
})
export class WidgetModule {}
