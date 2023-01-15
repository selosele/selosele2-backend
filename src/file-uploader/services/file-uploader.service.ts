import { Injectable } from '@nestjs/common';
import { UploadStream, v2 } from 'cloudinary';
import { FileUploaderApi, FileUploaderRequest, FileUploaderResponse } from '../models/file-uploader.model';
import toStream = require('buffer-to-stream');

@Injectable()
export class FileUploaderService implements FileUploaderApi {

  /** 파일 목록을 조회한다. */
  listFile(): Promise<FileUploaderResponse[]> {
    return new Promise((resolve, reject) => {
      v2.api.resources({ type: 'upload', prefix: '' }, (error, result) => {
        if (error) return reject(error);
        resolve(result.resources);
      });
    });
  }

  /** 이미지 파일을 업로드한다. */
  uploadImage(file: FileUploaderRequest): Promise<FileUploaderResponse> {
    return new Promise((resolve, reject) => {
      const upload: UploadStream = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    
      toStream(file.buffer).pipe(upload);
    });
  }

}
