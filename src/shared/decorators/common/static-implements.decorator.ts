/** static 메서드 구현을 위한 데코레이터 */
export function StaticImplements<T>() {
  return <U extends T>(constructor: U) => { constructor };
}
