import { faker } from '@faker-js/faker';

import { getSessionStore, setSessionStore } from './session';

const mockValues = () => ({ testID: faker.word.words(1), testName: faker.word.words(1) });

describe('Sessions', () => {
  test('Should setSessionStore and get the obj', async () => {
    const obj = mockValues();
    setSessionStore('fakeStore', obj);
    const sessionInfo = await getSessionStore('fakeStore');
    expect(sessionInfo).toStrictEqual(obj);
  });

  test('Should setSessionStore of string and get the same', async () => {
    const obj = mockValues();
    setSessionStore('fakeStoreName', obj.testName);
    const sessionInfo = await getSessionStore('fakeStoreName');
    expect(sessionInfo).toBe(obj.testName);
  });

  test('Should sessionStorage set without stringify and get parse error', async () => {
    const obj = mockValues();
    window.sessionStorage.setItem('fakeStoreString', obj.testName);
    const sessionInfo = await getSessionStore('fakeStoreString');

    expect(sessionInfo).toBe(obj.testName);
  });

  test('Should valid getSession where store not exists', async () => {
    const sessionInfo = await getSessionStore('fakeStoreGhost');
    expect(sessionInfo).toBe('');
  });

  test('Should get invalid window', async () => {
    // @ts-ignore: Its a valid way to check
    delete global.window;
    const sessionInfo = await getSessionStore('fakeStoreGhost');
    expect(sessionInfo).toBe('');
  });
});
