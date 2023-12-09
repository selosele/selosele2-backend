import { MaxFileSizeValidator as DefaultMaxFileSizeValidator } from '@nestjs/common';
import { FileUploaderRequest } from '@/file-uploader/models/file-uploader.model';

/** 파일 최대 용량 확인 validator */
export class MaxFileSizeValidator extends DefaultMaxFileSizeValidator {

  isValid(fileOrFiles: FileUploaderRequest | FileUploaderRequest[]): boolean {
    if (Array.isArray(fileOrFiles)) {
      const files = fileOrFiles;
      return files.every(file => super.isValid(file));
    }

    const file = fileOrFiles;
    return super.isValid(file);
  }

}
