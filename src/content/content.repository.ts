import { CustomRepository } from "src/configs/CustomRepository";
import { DeleteResult, Repository } from "typeorm";
import { ContentEntity } from "./content.entity";

@CustomRepository(ContentEntity)
export class ContentRepository extends Repository<ContentEntity> {

  /** 콘텐츠 목록을 조회한다. */
  async listContent(): Promise<ContentEntity[]> {
    return this.find({
      select: ['id', 'link', 'title', 'regDate', 'modDate'],
      order: {
        regDate: 'DESC',
      }
    });
  }

  /** 콘텐츠 다건을 삭제한다. */
  async removeContents(idList: number[]): Promise<DeleteResult> {
    return await this.delete(idList);
  }

}
