import { CustomRepository } from "src/configs/database/CustomRepository";
import { DeleteResult, Repository } from "typeorm";
import { ContentEntity } from "../models";
import { GetContentDto } from "../models/dto/get-content.dto";
import { ListContentDto } from "../models/dto/list-content.dto";
import { SaveContentDto } from "../models/dto/save-content.dto";

@CustomRepository(ContentEntity)
export class ContentRepository extends Repository<ContentEntity> {

  /** 콘텐츠 목록을 조회한다. */
  async listContent(listContentDto?: ListContentDto): Promise<[ContentEntity[], number]> {
    return await this.findAndCount({
      select: [
        'id', 'link', 'title',
        'cont', 'ogImg', 'ogImgUrl',
        'ogImgSize', 'ogDesc', 'regDate',
        'modDate', 'tmpYn'
      ],
      where: {
        tmpYn: listContentDto?.tmpYn || 'N',
      },
      order: {
        regDate: 'DESC',
      }
    });
  }

  /** 콘텐츠를 조회한다. */
  async getContent(getContentDto: GetContentDto): Promise<ContentEntity> {
    return await this.findOne({
      select: [
        'id', 'link', 'title',
        'regDate', 'modDate', 'cont',
        'ogImg', 'ogImgUrl', 'ogImgSize',
        'ogDesc', 'tmpYn'
      ],
      where: {
        ...('N' === getContentDto?.isLogin && {
          tmpYn: 'N',
        }),
        link: getContentDto?.link
      },
    });
  }

  /** 콘텐츠를 등록/수정한다. */
  async saveContent(saveContentDto: SaveContentDto): Promise<ContentEntity> {
    return await this.save(saveContentDto);
  }

  /** 콘텐츠를 삭제한다. */
  async removeContent(id: number): Promise<DeleteResult> {
    return await this.delete(id);
  }

  /** 콘텐츠 다건을 삭제한다. */
  async removeContents(idList: number[]): Promise<DeleteResult> {
    return await this.delete(idList);
  }

}
