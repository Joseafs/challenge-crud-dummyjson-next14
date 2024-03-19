export const encodeParamsToString = (params?: Record<string, string | number>) => {
  if (!params || Object.keys(params).length === 0) {
    return '';
  }

  const paramsArray = Object.entries(params).map(
    ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
  );
  return `?${paramsArray.join('&')}`;
};
