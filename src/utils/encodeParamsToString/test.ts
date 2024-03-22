import { encodeParamsToString } from '.';

describe('encodeParamsToString', () => {
  test('should return encoded string params by object', () => {
    const value = encodeParamsToString({ ipsum: 'ipsum', lorem: 'lorem' });

    expect(value).toBe('ipsum=ipsum&lorem=lorem');
  });
});
