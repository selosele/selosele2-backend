import { Module } from '@nestjs/common';
import { WidgetService } from './widget.service';
import { WidgetController } from './widget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { Widget } from './widget.entity';
import { WidgetRepository } from './widget.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Widget]),
    CustomTypeOrmModule.forCustomRepository([WidgetRepository]),
  ],
  controllers: [WidgetController],
  providers: [WidgetService]
})
export class WidgetModule {}
