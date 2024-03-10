import { FileTypeValidator as DefaultFileSizeValidator } from '@nestjs/common';
import { FileUploaderRequest } from '@/file-uploader/models';

/** 파일 유형 확인 validator */
export class FileTypeValidator extends DefaultFileSizeValidator {

  isValid(fileOrFiles: FileUploaderRequest | FileUploaderRequest[]): boolean {
    if (Array.isArray(fileOrFiles)) {
      const files = fileOrFiles;
      return files.every(file => super.isValid(file));
    }

    const file = fileOrFiles;
    return super.isValid(file);
  }

}
