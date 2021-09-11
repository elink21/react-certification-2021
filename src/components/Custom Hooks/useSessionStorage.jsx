import { useState, useEffect } from 'react';

function getSessionData(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

export const useSessionStorage = (key, defaultValue) => {
  const [value, setValue] = useState(getSessionData(key, defaultValue));

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
