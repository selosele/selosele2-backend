import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogConfigEntity, GetBlogConfigDto, SaveBlogConfigDto } from '../models';
import { BlogConfigRepository } from '../repositories/blog-config.repository';
import { FileUploaderService } from '@/file-uploader/services/file-uploader.service';
import { FileUploaderRequest, FileUploaderResponse } from '@/file-uploader/models/file-uploader.model';
import { isNotBlank, isNotEmpty } from '@/shared/utils';
import { DeleteResult } from 'typeorm';

@Injectable()
export class BlogConfigService {
  
  constructor(
    @InjectRepository(BlogConfigRepository)
    private readonly blogConfigRepository: BlogConfigRepository,
    private readonly fileUploaderService: FileUploaderService,
  ) {}

  /** 블로그 환경설정을 조회한다. */
  async getBlogConfig(getBlogConfigDto: GetBlogConfigDto): Promise<BlogConfigEntity> {
    return await this.blogConfigRepository.getBlogConfig(getBlogConfigDto);
  }

  /** 블로그 환경설정 목록을 조회한다. */
  async listBlogConfig(): Promise<[BlogConfigEntity[], number]> {
    return await this.blogConfigRepository.listBlogConfig();
  }

  /** 메인 포스트 목록 출력 개수를 조회한다. */
  async getPageSize(): Promise<number> {
    return await this.blogConfigRepository.getPageSize();
  }

  /** 카카오 메시지 수신 여부를 조회한다. */
  async getKakaoMsgYn(): Promise<string> {
    return await this.blogConfigRepository.getKakaoMsgYn();
  }

  /** 블로그 환경설정을 추가/수정한다. */
  async saveBlogConfig(saveBlogConfigDto: SaveBlogConfigDto, files: FileUploaderRequest[]): Promise<BlogConfigEntity> {
    saveBlogConfigDto.files = files;
    
    let fileUploaderResponse = null;

    // 업로드 파일 존재 시
    if (isNotEmpty(saveBlogConfigDto.files) && 0 < saveBlogConfigDto.files.length) {
      fileUploaderResponse = await this.uploadBlogConfigImg(saveBlogConfigDto);
      
      const avatarImgFile: FileUploaderRequest = saveBlogConfigDto.files.find(d => d.fieldname === 'avatarImgFile');
      const ogImgFile: FileUploaderRequest = saveBlogConfigDto.files.find(d => d.fieldname === 'ogImgFile');

      if (isNotEmpty(avatarImgFile)) {
        saveBlogConfigDto.avatarImg = fileUploaderResponse['avatarImgFileResponse'].public_id + '.' + fileUploaderResponse['avatarImgFileResponse'].format;
        saveBlogConfigDto.avatarImgUrl = fileUploaderResponse['avatarImgFileResponse'].secure_url;
        saveBlogConfigDto.avatarImgSize = avatarImgFile.size;
      }

      if (isNotEmpty(ogImgFile)) {
        saveBlogConfigDto.ogImg = fileUploaderResponse['ogImgFileResponse'].public_id + '.' + fileUploaderResponse['ogImgFileResponse'].format;
        saveBlogConfigDto.ogImgUrl = fileUploaderResponse['ogImgFileResponse'].secure_url;
        saveBlogConfigDto.ogImgSize = ogImgFile.size;
      }
    }

    // 아바타 이미지 파일 삭제 여부 값 존재 시
    if (this.hasDelImg(saveBlogConfigDto.delAvatarImg)) {
      saveBlogConfigDto.avatarImg = '';
      saveBlogConfigDto.avatarImgUrl = null;
      saveBlogConfigDto.avatarImgSize = null;
    }

    // 대표 이미지 파일 삭제 여부 값 존재 시
    if (this.hasDelImg(saveBlogConfigDto.delOgImg)) {
      saveBlogConfigDto.ogImg = '';
      saveBlogConfigDto.ogImgUrl = null;
      saveBlogConfigDto.ogImgSize = null;
    }

    return await this.blogConfigRepository.saveBlogConfig(saveBlogConfigDto);
  }

  /** 블로그 환경설정을 삭제한다. */
  async removeBlogConfig(id: number): Promise<DeleteResult> {
    return await this.blogConfigRepository.removeBlogConfig(id);
  }

  /** 블로그 환경설정 이미지 파일을 업로드한다. */
  private async uploadBlogConfigImg(saveBlogConfigDto: SaveBlogConfigDto): Promise<{ [key: string]: FileUploaderResponse}> {
    const avatarImgFile: FileUploaderRequest = saveBlogConfigDto.files.find(d => d.fieldname === 'avatarImgFile');
    const ogImgFile: FileUploaderRequest = saveBlogConfigDto.files.find(d => d.fieldname === 'ogImgFile');

    let avatarImgFileResponse: FileUploaderResponse = null;
    let ogImgFileResponse: FileUploaderResponse = null;

    // 블로그 아바타 이미지 파일 업로드
    if (isNotEmpty(avatarImgFile) && !this.hasDelImg(saveBlogConfigDto.delAvatarImg)) {
      avatarImgFileResponse = await this.fileUploaderService.uploadImage(avatarImgFile);
    }

    // 블로그 대표 이미지 파일 업로드
    if (isNotEmpty(ogImgFile) && !this.hasDelImg(saveBlogConfigDto.delOgImg)) {
      ogImgFileResponse = await this.fileUploaderService.uploadImage(ogImgFile);
    }

    return {
      avatarImgFileResponse,
      ogImgFileResponse,
    }
  }

  /** 블로그 환경설정 이미지 파일 삭제 여부 값 존재를 확인한다. */
  private hasDelImg(delImg: string): boolean {
    return isNotBlank(delImg) && delImg === 'Y';
  }
  
}
