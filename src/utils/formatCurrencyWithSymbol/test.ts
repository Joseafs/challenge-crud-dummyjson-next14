import { formatCurrencyWithSymbol } from '.';

describe('formatCurrencyWithSymbol', () => {
  test('should format number to currency', () => {
    const value = formatCurrencyWithSymbol(12345);

    expect(value).toBe('R$ 12.345,00');
  });

  test('should return formatted 0 when value is NaN', () => {
    const value = formatCurrencyWithSymbol(parseInt('a'));

    expect(value).toEqual('R$ 0,00');
  });
});
