import { DatabaseModule } from "@/database/database.module";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IndexSearchEntity } from "./models";
import { IndexSearchRepository } from "./repositories/index-search.repository";
import { CustomRepositoryModule } from "@/database/repository/custom-repository.module";
import { IndexSearchService } from "./services/index-search.service";
import { IndexSearchController } from "./controllers/index-search.controller";
import { PostRepository } from "@/post/repositories/post.repository";
import { PostEntity } from "@/post/models";

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      IndexSearchEntity,
      PostEntity
    ]),
    CustomRepositoryModule.forCustomRepository([
      IndexSearchRepository,
      PostRepository
    ])
  ],
  controllers: [
    IndexSearchController
  ],
  providers: [
    IndexSearchService
  ]
})
export class IndexSearchModule {}