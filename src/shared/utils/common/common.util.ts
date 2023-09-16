import { plainToClass, ClassConstructor } from "class-transformer";
import { FileUploaderRequest } from "src/file-uploader/models/file-uploader.model";

/** 값이 비었는지 확인 */
export function isEmpty(value: any): boolean {
  return null === value || undefined === value || '' === value;
}

/** 값이 있는지 확인 */
export function isNotEmpty(value: any): boolean {
  return !isEmpty(value);
}

/** 문자열 값이 비었는지 확인 */
export function isBlank(value: any): boolean {
  return isEmpty(value) || 0 === value.trim().length;
}

/** 문자열 값이 있는지 확인 */
export function isNotBlank(value: any): boolean {
  return !isBlank(value);
}

/** 값을 1개라도 포함하는지 확인 */
export function isIn(target: any, ...value: any[]): boolean {
  return value.some(v => v === target);
}

/** 업로드 파일이 없는지 확인 */
export function isFileEmpty(value: FileUploaderRequest): boolean {
  return isEmpty(value) || 0 === Object.values(value).length;
}

/** 업로드 파일이 있는지 확인 */
export function isNotFileEmpty(value: FileUploaderRequest): boolean {
  return !isFileEmpty(value);
}

/** 역직렬화 */
export function deserialize<T>(clazz: ClassConstructor<T>, plain: any): T {
  return plainToClass(clazz, JSON.parse(plain));
}
