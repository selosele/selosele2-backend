import { plainToClass, ClassConstructor, classToPlain } from 'class-transformer';
import { FileUploaderRequest } from '@/file-uploader/models/file-uploader.model';

/** 값이 비었는지 확인한다. */
export function isEmpty(value: any): boolean {
  return null === value || undefined === value || '' === value;
}

/** 값이 있는지 확인한다. */
export function isNotEmpty(value: any): boolean {
  return !isEmpty(value);
}

/** 문자열 값이 비었는지 확인한다. */
export function isBlank(value: any): boolean {
  return isEmpty(value) || 0 === value.trim().length;
}

/** 문자열 값이 있는지 확인한다. */
export function isNotBlank(value: any): boolean {
  return !isBlank(value);
}

/** 업로드 파일이 없는지 확인한다. */
export function isFileEmpty(value: FileUploaderRequest): boolean {
  return isEmpty(value) || 0 === Object.values(value).length;
}

/** 업로드 파일이 있는지 확인한다. */
export function isNotFileEmpty(value: FileUploaderRequest): boolean {
  return !isFileEmpty(value);
}

/** 개발 환경인지 확인한다. */
export function isDev(nodeEnv: string): boolean {
  return 'development' === nodeEnv;
}

/** 운영 환경인지 확인한다. */
export function isProd(nodeEnv: string): boolean {
  return 'production' === nodeEnv;
}

/** 직렬화를 한다. */
export function serialize<T>(instance: unknown): T {
  return classToPlain(instance) as T;
}

/** 역직렬화를 한다. */
export function deserialize<T>(instance: ClassConstructor<T>, plain: any): T {
  return plainToClass(instance, JSON.parse(plain));
}
