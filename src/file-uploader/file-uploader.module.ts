import { Module } from '@nestjs/common';
import { FileUploaderService } from './services/file-uploader.service';
import { FileUploaderProvider } from './providers/file-uploader.provider';
import { FileUploaderController } from './controllers/file-uploader.controller';

@Module({
  controllers: [FileUploaderController],
  providers: [FileUploaderProvider, FileUploaderService],
  exports: [FileUploaderProvider, FileUploaderService],
})
export class FileUploaderModule {}
