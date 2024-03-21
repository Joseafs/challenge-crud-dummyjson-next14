export const generateArray = <T>(length: number, valuesFn: () => T): T[] => Array.from({ length }, valuesFn);
