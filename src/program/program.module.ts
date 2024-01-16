import { DatabaseModule } from "@/database/database.module";
import { CustomRepositoryModule } from "@/database/repository/custom-repository.module";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProgramDetailEntity, ProgramEntity } from "./models";
import { ProgramRepository } from "./repositories/program.repository";
import { ProgramService } from "./services/program.service";
import { ProgramController } from "./controllers/program.controller";
import { ProgramDetailRepository } from "./repositories/program-detail.repository";
import { ProgramDetailService } from "./services/program-detail.service";
import { ProgramDetailController } from "./controllers/program-detail.controller";

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      ProgramEntity,
      ProgramDetailEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
      ProgramRepository,
      ProgramDetailRepository
    ]),
  ],
  controllers: [
    ProgramController,
    ProgramDetailController
  ],
  providers: [
    ProgramService,
    ProgramDetailService
  ]
})
export class ProgramModule {}