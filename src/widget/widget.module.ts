import { Module } from '@nestjs/common';
import { WidgetService } from './widget.service';
import { WidgetController } from './widget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { WidgetEntity } from './entities/widget.entity';
import { WidgetRepository } from './widget.repository';

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
