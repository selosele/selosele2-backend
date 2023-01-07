/** 값이 비었는지 확인 */
export const isEmpty = (value: any): boolean => {
  return null === value || undefined === value || '' === value;
};

/** 값이 있는지 확인 */
export const isNotEmpty = (value: any): boolean => {
  return !isEmpty(value);
};

/** 문자열 값이 비었는지 확인 */
export const isBlank = (value: any): boolean => {
  return isEmpty(value) || 0 === value.trim().length;
};

/** 문자열 값이 있는지 확인 */
export const isNotBlank = (value: any): boolean => {
  return !isBlank(value);
};

/** 값을 1개라도 포함하는지 확인 */
export const isIn = (target: any, ...values: any[]): boolean => {
  return values.some(v => v === target);
};

/** 값이 배열인지 확인 */
export const isArray = (value: any): boolean => {
  return Array.isArray(value);
};
