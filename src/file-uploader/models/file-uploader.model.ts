import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

/** 파일 업로더 API */
export interface FileUploaderApi {

  /** 파일 목록을 조회한다. */
  listFile(): Promise<FileUploaderResponse[]>;

  /** 이미지 파일을 업로드한다. */
  uploadImage(file: FileUploaderRequest): Promise<FileUploaderResponse>;
  
}

/** 파일 업로더 요청 Type */
export type FileUploaderRequest = Express.Multer.File;

/** 파일 업로더 응답 Type */
export type FileUploaderResponse = UploadApiResponse | UploadApiErrorResponse;
