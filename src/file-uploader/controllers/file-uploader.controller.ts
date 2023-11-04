import { Controller, Get, ParseFilePipe, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { FileUploaderService } from "../services/file-uploader.service";
import { FileUploaderRequest, FileUploaderResponse } from '../models/file-uploader.model';
import { Auth } from "src/shared/decorators";
import { Roles } from "src/auth/models";
import { AnyFilesInterceptor } from "@nestjs/platform-express";
import { FileTypeValidator, MaxFileSizeValidator } from "src/shared/utils";

@Controller('file')
@ApiTags('파일 업로더 API')
export class FileUploaderController {
  
  constructor(
    private readonly fileUploaderService: FileUploaderService,
  ) {}

  @Get()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '파일 목록 조회 API',
    description: '파일 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<FileUploaderResponse>,
    description: '파일 목록',
  })
  async listFile(): Promise<FileUploaderResponse[]> {
    return await this.fileUploaderService.listFile();
  }

  @Post()
  @Auth(Roles.ROLE_ADMIN)
  @UseInterceptors(AnyFilesInterceptor())
  @ApiOperation({
    summary: '파일 업로드 API',
    description: '파일을 업로드한다.'
  })
  async addFile(
    @UploadedFiles(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
    })) files: FileUploaderRequest[],
  ): Promise<void> {
    for (const file of files) {
      await this.fileUploaderService.uploadImage(file);
    }
  }

}
