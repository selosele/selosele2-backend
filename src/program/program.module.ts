import { DatabaseModule } from "@/database/database.module";
import { CustomRepositoryModule } from "@/database/repository/custom-repository.module";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProgramDetailEntity, ProgramEntity } from "./models";
import { ProgramRepository } from "./repositories/program.repository";
import { ProgramService } from "./services/program.service";
import { ProgramController } from "./controllers/program.controller";

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      ProgramEntity,
      ProgramDetailEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
      ProgramRepository
    ]),
  ],
  controllers: [
    ProgramController
  ],
  providers: [
    ProgramService
  ]
})
export class ProgramModule {}