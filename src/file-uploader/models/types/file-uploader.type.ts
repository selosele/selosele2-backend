import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { Express } from 'express';
import { Multer } from 'multer';

// 주의: Express, Multer interface를 사용하지 않더라도
// import를 해야 네임스페이스 오류가 발생하지 않는다

/** 파일 업로더 요청 Type */
export type FileUploaderRequest = Express.Multer.File;

/** 파일 업로더 응답 Type */
export type FileUploaderResponse = UploadApiResponse | UploadApiErrorResponse;
