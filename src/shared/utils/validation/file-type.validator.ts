import { FileTypeValidator as DefaultFileSizeValidator } from '@nestjs/common';
import { Express } from 'express';
import { Multer } from 'multer';

/** 파일 유형 확인 validator */
export class FileTypeValidator extends DefaultFileSizeValidator {

  isValid(fileOrFiles: Express.Multer.File | Express.Multer.File[]): boolean {
    if (Array.isArray(fileOrFiles)) {
      const files = fileOrFiles;
      return files.every(file => super.isValid(file));
    }

    const file = fileOrFiles;
    return super.isValid(file);
  }

}
