export const calculateDiscountValue = (value: number, percentage: number) => {
  return value * (1 - percentage / 100);
};
