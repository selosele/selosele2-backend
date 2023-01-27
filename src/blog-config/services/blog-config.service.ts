import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogConfigEntity, UpdateBlogConfigDto } from '../models';
import { BlogConfigRepository } from '../repositories/blog-config.repository';
import { FileUploaderService } from 'src/file-uploader/services/file-uploader.service';
import { FileUploaderRequest, FileUploaderResponse } from 'src/file-uploader/models/file-uploader.model';
import { isNotBlank, isNotEmpty } from 'src/shared/utils';

@Injectable()
export class BlogConfigService {
  
  constructor(
    @InjectRepository(BlogConfigRepository)
    private readonly blogConfigRepository: BlogConfigRepository,
    private readonly fileUploaderService: FileUploaderService,
  ) {}

  /** 블로그 환경설정을 조회한다. */
  async getBlogConfig(): Promise<BlogConfigEntity> {
    return await this.blogConfigRepository.getBlogConfig();
  }

  /** 블로그 환경설정을 수정한다. */
  async updateBlogConfig(updateBlogConfigDto: UpdateBlogConfigDto): Promise<BlogConfigEntity> {
    let fileUploaderResponse = null;

    // 업로드 파일 존재 시
    if (0 < updateBlogConfigDto.files.length) {
      fileUploaderResponse = await this.uploadBlogConfigImg(updateBlogConfigDto);
      
      const avatarImgFile: FileUploaderRequest = updateBlogConfigDto.files.find(d => d.fieldname === 'avatarImgFile');
      const ogImgFile: FileUploaderRequest = updateBlogConfigDto.files.find(d => d.fieldname === 'ogImgFile');

      if (isNotEmpty(avatarImgFile)) {
        updateBlogConfigDto.avatarImg = fileUploaderResponse['avatarImgFileResponse'].public_id + '.' + fileUploaderResponse['avatarImgFileResponse'].format;
        updateBlogConfigDto.avatarImgUrl = fileUploaderResponse['avatarImgFileResponse'].url;
        updateBlogConfigDto.avatarImgSize = avatarImgFile.size;
      }

      if (isNotEmpty(ogImgFile)) {
        updateBlogConfigDto.ogImg = fileUploaderResponse['ogImgFileResponse'].public_id + '.' + fileUploaderResponse['ogImgFileResponse'].format;
        updateBlogConfigDto.ogImgUrl = fileUploaderResponse['ogImgFileResponse'].url;
        updateBlogConfigDto.ogImgSize = ogImgFile.size;
      }
    }

    // 아바타 이미지 파일 삭제여부 값 존재 시
    if (this.hasDelImg(updateBlogConfigDto.delAvatarImg)) {
      updateBlogConfigDto.avatarImg = '';
      updateBlogConfigDto.avatarImgUrl = null;
      updateBlogConfigDto.avatarImgSize = null;
    }

    // 대표 이미지 파일 삭제여부 값 존재 시
    if (this.hasDelImg(updateBlogConfigDto.delOgImg)) {
      updateBlogConfigDto.ogImg = '';
      updateBlogConfigDto.ogImgUrl = null;
      updateBlogConfigDto.ogImgSize = null;
    }

    return await this.blogConfigRepository.updateBlogConfig(updateBlogConfigDto);
  }

  /** 블로그 환경설정 이미지 파일을 업로드한다. */
  private async uploadBlogConfigImg(updateBlogConfigDto: UpdateBlogConfigDto): Promise<{ [key: string]: FileUploaderResponse}> {
    const avatarImgFile: FileUploaderRequest = updateBlogConfigDto.files.find(d => d.fieldname === 'avatarImgFile');
    const ogImgFile: FileUploaderRequest = updateBlogConfigDto.files.find(d => d.fieldname === 'ogImgFile');

    let avatarImgFileResponse: FileUploaderResponse = null;
    let ogImgFileResponse: FileUploaderResponse = null;

    // 블로그 아바타 이미지 파일 업로드
    if (isNotEmpty(avatarImgFile) && !this.hasDelImg(updateBlogConfigDto.delAvatarImg)) {
      avatarImgFileResponse = await this.fileUploaderService.uploadImage(avatarImgFile);
    }

    // 블로그 대표 이미지 파일 업로드
    if (isNotEmpty(ogImgFile) && !this.hasDelImg(updateBlogConfigDto.delOgImg)) {
      ogImgFileResponse = await this.fileUploaderService.uploadImage(ogImgFile);
    }

    return {
      avatarImgFileResponse,
      ogImgFileResponse,
    }
  }

  /** 블로그 환경설정 이미지 파일 삭제여부 값 존재를 확인한다. */
  private hasDelImg(delImg: string): boolean {
    return isNotBlank(delImg) && 'Y' === delImg;
  }
  
}
