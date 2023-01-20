import { Controller, Get } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { FileUploaderService } from "../services/file-uploader.service";
import { FileUploaderResponse } from '../models/file-uploader.model';

@Controller('file')
@ApiTags('파일 업로더 API')
export class FileUploaderController {
  
  constructor(
    private readonly fileUploaderService: FileUploaderService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '파일 목록 조회 API',
    description: '파일 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    description: '파일 목록을 조회한다.',
  })
  listFile(): Promise<FileUploaderResponse[]> {
    return this.fileUploaderService.listFile();
  }

}
