import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Builder } from 'builder-pattern';
import { FileUploaderResponse } from 'src/file-uploader/models/file-uploader.model';
import { FileUploaderService } from 'src/file-uploader/services/file-uploader.service';
import { UpdateContentMenuDto } from 'src/menu/models/dto/update-content-menu.dto';
import { MenuRepository } from 'src/menu/repositories/menu.repository';
import { escapeHtml, getRawText, isBlank, isEmpty, isNotBlank, isNotFileEmpty, md, santinizeHtmlOption, startTransaction } from 'src/shared/utils';
import { DeleteResult, EntityManager } from 'typeorm';
import { RemoveContentDto, GetContentDto, ContentEntity } from '../models';
import { ListContentDto } from '../models/dto/list-content.dto';
import { SaveContentDto } from '../models/dto/save-content.dto';
import { ContentRepository } from '../repositories/content.repository';

@Injectable()
export class ContentService {

  constructor(
    @InjectRepository(ContentRepository)
    private readonly contentRepository: ContentRepository,
    @InjectRepository(MenuRepository)
    private readonly menuRepository: MenuRepository,
    private readonly fileUploaderService: FileUploaderService,
  ) {}

  /** 콘텐츠 목록을 조회한다. */
  async listContent(listContentDto?: ListContentDto): Promise<[ContentEntity[], number]> {
    const contentList: [ContentEntity[], number] = await this.contentRepository.listContent(listContentDto);

    contentList[0].forEach(c => {

      // 콘텐츠 데이타에 Markdown -> 순수 텍스트로 파싱한 결과물을 넣어준다.
      c.rawText = getRawText(c.cont);

      // 콘텐츠의 내용을 Markdown으로 렌더링한다.
      c.cont = md.render(c.cont);
    });

    return contentList;
  }

  /** 콘텐츠를 조회한다. */
  async getContent(getContentDto: GetContentDto): Promise<ContentEntity> {
    const content: ContentEntity = await this.contentRepository.getContent(getContentDto);

    if (isEmpty(content)) {
      throw new NotFoundException();
    }

    content.rawText = content.cont;

    // 콘텐츠의 내용을 Markdown으로 렌더링한다.
    content.cont = md.render(content.cont);

    return content;
  }

  /** 콘텐츠를 등록/수정한다. */
  async saveContent(saveContentDto: SaveContentDto): Promise<ContentEntity> {
    const { title, cont, ogImgFile, delOgImg, updateMenuNameYn } = saveContentDto;

    // 콘텐츠 내용 요약이 없으면 제목을 넣는다.
    if (isBlank(saveContentDto.ogDesc)) {
      saveContentDto.ogDesc = title;
    }

    // HTML Escape
    saveContentDto.cont = escapeHtml(cont, santinizeHtmlOption);

    // 대표 이미지 파일을 업로드한다.
    if (isNotFileEmpty(ogImgFile) && !this.hasDelOgImg(delOgImg)) {
      const uploadFile: FileUploaderResponse = await this.fileUploaderService.uploadImage(ogImgFile);

      saveContentDto.ogImg = uploadFile.public_id + '.' + uploadFile.format;
      saveContentDto.ogImgUrl = uploadFile.url;
      saveContentDto.ogImgSize = ogImgFile.size;
    }

    // 대표 이미지 정보를 삭제한다.
    if (this.hasDelOgImg(delOgImg)) {
      saveContentDto.ogImg = null;
      saveContentDto.ogImgUrl = null;
      saveContentDto.ogImgSize = null;
    }

    let content: ContentEntity = null;

    // 트랜잭션을 시작한다.
    await startTransaction(async (em: EntityManager) => {

      // 1. 콘텐츠를 저장한다.
      content = await em.withRepository(this.contentRepository).saveContent(saveContentDto);

      // 2. 연결메뉴명을 수정한다.
      if ('Y' === updateMenuNameYn) {
        const updateContentMenuDto = Builder(UpdateContentMenuDto)
                                      .link(`/content${saveContentDto.link}`)
                                      .name(saveContentDto.title)
                                      .build();
        await em.withRepository(this.menuRepository).updateContentMenu(updateContentMenuDto);
      }
    });

    return content;
  }

  /** 콘텐츠를 삭제한다. */
  async removeContent(id: number): Promise<DeleteResult> {
    return await this.contentRepository.removeContent(id);
  }

  /** 콘텐츠를 다건을 삭제한다. */
  async removeContents(removeContentDto: RemoveContentDto[]): Promise<DeleteResult> {
    let idList: number[] = [];

    removeContentDto.forEach(d => {
      idList.push(d.id);
    });
    
    return await this.contentRepository.removeContents(idList);
  }

  /** 미리보기 콘텐츠 데이타를 가공한다.  */
  async getPreviewContent(saveContentDto: SaveContentDto): Promise<ContentEntity> {

    // 콘텐츠의 내용을 Markdown으로 렌더링한다.
    saveContentDto.cont = md.render(saveContentDto.cont);

    return <ContentEntity>saveContentDto;
  }

  /** 콘텐츠 대표 이미지 파일 삭제 여부 값 존재를 확인한다. */
  private hasDelOgImg(delOgImg: string): boolean {
    return isNotBlank(delOgImg) && 'Y' === delOgImg;
  }

}
