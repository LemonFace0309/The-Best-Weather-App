import { useEffect, useState } from 'react';

export const PREFIX = 'Weather: ';

const useLocalStorage = (key: string, initialValue: any) => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = typeof window !== 'undefined' ? localStorage.getItem(prefixedKey) : null;
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    } else if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
