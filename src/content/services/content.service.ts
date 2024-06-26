import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileUploaderService } from '@/file-uploader/services/file-uploader.service';
import { MenuRepository } from '@/menu/repositories/menu.repository';
import { getRawText, isBlank, isEmpty, isNotBlank, isNotFileEmpty, md, serialize } from '@/shared/utils';
import { DataSource, DeleteResult, EntityManager } from 'typeorm';
import { RemoveContentDto, GetContentDto, ContentEntity, SaveContentDto, ListContentDto, ContentDto } from '../models';
import { ContentRepository } from '../repositories/content.repository';
import { UpdateContentMenuDto } from '@/menu/models';

@Injectable()
export class ContentService {

  constructor(
    @InjectRepository(ContentRepository)
    private readonly contentRepository: ContentRepository,
    @InjectRepository(MenuRepository)
    private readonly menuRepository: MenuRepository,
    private readonly fileUploaderService: FileUploaderService,
    private readonly dataSource: DataSource,
  ) {}

  /** 콘텐츠 목록을 조회한다. */
  async listContent(listContentDto?: ListContentDto): Promise<[ContentDto[], number]> {
    const [contents, contentCount] = await this.contentRepository.listContent(listContentDto);
    const contentDtos = serialize<ContentDto[]>(contents);

    contentDtos.forEach(c => {

      // 콘텐츠 데이터에 Markdown -> 순수 텍스트로 파싱한 결과물을 넣어준다.
      c.rawText = getRawText(c.cont);

      // 콘텐츠의 내용을 Markdown으로 렌더링한다.
      c.cont = md.render(c.cont);
    });

    return [contentDtos, contentCount];
  }

  /** 콘텐츠를 조회한다. */
  async getContent(getContentDto: GetContentDto): Promise<ContentDto> {
    const content = await this.contentRepository.getContent(getContentDto);

    if (isEmpty(content)) {
      throw new NotFoundException();
    }

    const contentDto = serialize<ContentDto>(content);
    contentDto.rawText = content.cont;

    // 콘텐츠의 내용을 Markdown으로 렌더링한다.
    contentDto.cont = md.render(content.cont);

    return contentDto;
  }

  /** 콘텐츠를 등록/수정한다. */
  async saveContent(saveContentDto: SaveContentDto): Promise<ContentEntity> {
    const { title, cont, ogImgFile, delOgImg, updateMenuNameYn } = saveContentDto;

    // 콘텐츠 내용 요약이 없으면 제목을 넣는다.
    if (isBlank(saveContentDto.ogDesc)) {
      saveContentDto.ogDesc = title;
    }

    // HTML Escape
    // 2024.03.23. 코드블럭의 Java 제네릭이 태그로 인식되어 닫는 태그가 생성되는 이슈로 인해 주석처리
    // saveContentDto.cont = escapeHtml(cont, Object.assign(santinizeHtmlOption, {
    //   allowedTags: false,
    //   allowedAttributes: false,
    // }));

    // 대표 이미지 파일을 업로드한다.
    if (isNotFileEmpty(ogImgFile) && !this.hasDelOgImg(delOgImg)) {
      const uploadFile = await this.fileUploaderService.uploadImage(ogImgFile);

      saveContentDto.ogImg = uploadFile.public_id + '.' + uploadFile.format;
      saveContentDto.ogImgUrl = uploadFile.secure_url;
      saveContentDto.ogImgSize = ogImgFile.size;
    }

    // 대표 이미지 정보를 삭제한다.
    if (this.hasDelOgImg(delOgImg)) {
      saveContentDto.ogImg = null;
      saveContentDto.ogImgUrl = null;
      saveContentDto.ogImgSize = null;
    }

    // 트랜잭션을 시작한다.
    const result = await this.dataSource.transaction<ContentEntity>(async (em: EntityManager) => {
      const contentRepository = em.withRepository(this.contentRepository);
      const menuRepository = em.withRepository(this.menuRepository);

      // 1. 콘텐츠를 저장한다.
      const content: ContentEntity = await contentRepository.saveContent(saveContentDto);

      // 2. 연결메뉴명을 수정한다.
      if ('Y' === updateMenuNameYn) {
        const updateContentMenuDto: UpdateContentMenuDto = {};
        updateContentMenuDto.link = `/content${saveContentDto.link}`;
        updateContentMenuDto.name = saveContentDto.title;
        
        await menuRepository.updateContentMenu(updateContentMenuDto);
      }
      return content;
    });

    return result;
  }

  /** 콘텐츠를 삭제한다. */
  async removeContent(id: number): Promise<DeleteResult> {
    return await this.contentRepository.removeContent(id);
  }

  /** 콘텐츠 다건을 삭제한다. */
  async removeContents(removeContentDto: RemoveContentDto[]): Promise<DeleteResult> {
    let idList: number[] = [];

    removeContentDto.forEach(d => {
      idList.push(d.id);
    });
    
    return await this.contentRepository.removeContents(idList);
  }

  /** 미리보기 콘텐츠 데이터를 가공한다.  */
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
