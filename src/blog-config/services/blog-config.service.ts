import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogConfigEntity } from '../models';
import { BlogConfigRepository } from '../repositories/blog-config.repository';
import { FileUploaderService } from 'src/file-uploader/services/file-uploader.service';
import { BizException } from 'src/shared/exceptions/biz/biz.exception';
import { FileUploaderRequest, FileUploaderResponse } from 'src/file-uploader/models/file-uploader.model';

@Injectable()
export class BlogConfigService {
  
  constructor(
    @InjectRepository(BlogConfigRepository)
    private readonly blogConfigRepository: BlogConfigRepository,
    private readonly fileUploaderService: FileUploaderService,
  ) {}

  /** 블로그 환경설정 정보를 조회한다. */
  async getBlogConfig(): Promise<BlogConfigEntity> {
    return await this.blogConfigRepository.getBlogConfig();
  }

  /** 블로그 환경설정 이미지 파일을 업로드한다. */
  async uploadBlogConfigImage(file: FileUploaderRequest): Promise<FileUploaderResponse> {
    return await this.fileUploaderService.uploadImage(file).catch(() => {
      throw new BizException('유효하지 않은 파일 형식입니다.');
    });
  }
  
}
