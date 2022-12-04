import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/configs/CustomTypeOrmModule';
import { ContentRepository } from './content.repository';
import { ContentEntity } from './content.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContentEntity]),
    CustomTypeOrmModule.forCustomRepository([
      ContentRepository,
    ]),
  ],
  controllers: [ContentController],
  providers: [ContentService]
})
export class ContentModule {}
