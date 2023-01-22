import { Controller, Get, ParseFilePipe, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { FileUploaderService } from "../services/file-uploader.service";
import { FileUploaderRequest, FileUploaderResponse } from '../models/file-uploader.model';
import { Auth } from "src/shared/decorators";
import { RoleEnum } from "src/auth/models";
import { AnyFilesInterceptor } from "@nestjs/platform-express";
import { FileTypeValidator, MaxFileSizeValidator } from "src/shared/utils";

@Controller('file')
@ApiTags('파일 업로더 API')
export class FileUploaderController {
  
  constructor(
    private readonly fileUploaderService: FileUploaderService,
  ) {}

  @Get()
  @Auth(RoleEnum.ROLE_ADMIN)
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

  @Post()
  @Auth(RoleEnum.ROLE_ADMIN)
  @UseInterceptors(AnyFilesInterceptor())
  @ApiOperation({
    summary: '파일 업로드 API',
    description: '파일을 업로드한다.'
  })
  addFile(
    @UploadedFiles(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
    })) files: FileUploaderRequest[],
  ): void {
    for (let file of files) {
      this.fileUploaderService.uploadImage(file);
    }
  }

}
