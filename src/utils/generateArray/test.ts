import { faker } from '@faker-js/faker';

import { generateArray } from '.';

describe('generateArray', () => {
  test('should generate a array with length', () => {
    const valuesArray = generateArray(4, () => ({
      label: faker.lorem.words(1),
      value: faker.lorem.words(1),
    }));

    expect(valuesArray.length).toBe(4);
  });

  test('should values generated not be equal', () => {
    const valuesArray = generateArray(4, () => ({
      label: faker.lorem.words(1),
      value: faker.lorem.words(1),
    }));

    expect(valuesArray[0].value != valuesArray[1].value).toBeTruthy();
    expect(valuesArray[0].value != valuesArray[2].value).toBeTruthy();
    expect(valuesArray[0].value != valuesArray[3].value).toBeTruthy();
  });
});
