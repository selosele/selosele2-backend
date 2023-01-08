import { Module } from '@nestjs/common';
import { FileUploaderService } from './file-uploader.service';
import { FileUploaderProvider } from './providers/file-uploader.provider';

@Module({
  providers: [FileUploaderProvider, FileUploaderService],
  exports: [FileUploaderProvider, FileUploaderService],
})
export class FileUploaderModule {}
