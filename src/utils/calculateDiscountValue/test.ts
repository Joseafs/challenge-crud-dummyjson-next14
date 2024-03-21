import { calculateDiscountValue } from '.';

describe('calculateDiscountValue', () => {
  test('should return values with percentage discount', () => {
    const value1 = calculateDiscountValue(10, 10);
    const value2 = calculateDiscountValue(100, 100);
    const value3 = calculateDiscountValue(1000, 50);

    expect(value1).toBe(9);
    expect(value2).toBe(0);
    expect(value3).toBe(500);
  });
});
