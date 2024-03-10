import { Injectable } from '@nestjs/common';
import { UploadStream, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class FileUploaderService {

  /** 파일 목록 */
  private fileList: any[] = [];

  /** 파일 목록을 조회한다. */
  listFile(nextCursor = null): Promise<any[]> {
    if (nextCursor == null) {
      this.fileList = [];
    }

    return new Promise((resolve, reject) => {
      v2.api.resources({ type: 'upload', prefix: '', next_cursor: nextCursor }, async (error, result) => {
        if (error) return reject(error);

        this.fileList.push(...result.resources);

        if (result.next_cursor) {
          await this.listFile(result.next_cursor);
        }
        resolve(this.fileList);
      });
    });
  }

  /** 이미지 파일을 업로드한다. */
  uploadImage(file: Express.Multer.File): Promise<any> {
    return new Promise((resolve, reject) => {
      const upload: UploadStream = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    
      toStream(file.buffer).pipe(upload);
    });
  }

}
