export const generateArray = <T>(length: number, valuesFn: (e: T, index: number) => T): T[] =>
  Array.from({ length }, valuesFn);
