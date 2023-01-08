import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

/** 이미지 업로더 API */
export interface FileUploaderApi {

  /** 이미지를 업로드한다. */
  uploadImage(file: FileUploaderRequest): Promise<FileUploaderResponse>;
  
}

/** 이미지 업로더 요청 Type */
export type FileUploaderRequest = Express.Multer.File;

/** 이미지 업로더 응답 Type */
export type FileUploaderResponse = UploadApiResponse | UploadApiErrorResponse;
