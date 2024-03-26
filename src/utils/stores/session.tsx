export const getSessionStore = async <Data = any,>(key: string): Promise<Data | null> => {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = sessionStorage.getItem(key);

  if (value === null) return null;

  try {
    return JSON.parse(value);
  } catch (e) {
    return null;
  }
};

export const setSessionStore = (key: string, value: number | string | {} | []) => {
  const valueStringify = JSON.stringify(value);
  sessionStorage.setItem(key, valueStringify);
};
