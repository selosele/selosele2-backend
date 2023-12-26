import { Module } from '@nestjs/common';
import { WidgetService } from './services/widget.service';
import { WidgetController } from './controllers/widget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomRepositoryModule } from '@/database/repository/custom-repository.module';
import { WidgetEntity } from './models';
import { WidgetRepository } from './repositories/widget.repository';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      WidgetEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
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
