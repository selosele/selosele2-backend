// 값이 비었는지 확인
export const isEmpty = (value: any) => {
  return null === value || undefined === value || '' === value;
};

// 값이 있는지 확인
export const isNotEmpty = (value: any) => {
  return !isEmpty(value);
};
