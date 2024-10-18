export const generateArray = <T>(length: number, valuesFn: (index: number) => T): T[] =>
  Array.from({ length }, (_, index) => valuesFn(index));
