import { escapeRegExp } from '.';

describe('escapeRegExp', () => {
  it('should escape the special characters', () => {
    // Teste com uma string que contém caracteres especiais
    const inputText = 'test.*+?^${}()|[\\]';
    const expectedOutput = 'test\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\\\]';
    expect(escapeRegExp(inputText)).toEqual(expectedOutput);
  });

  test('should return the same string', () => {
    const inputText = 'test string without special characters';
    expect(escapeRegExp(inputText)).toEqual(inputText);
  });
});
