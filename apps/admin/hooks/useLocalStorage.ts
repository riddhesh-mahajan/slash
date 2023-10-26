"use client";

const processStoredValue = (storedValue) => {
  try {
    return JSON.parse(storedValue);
  } catch (err) {
    return storedValue;
  }
};

const parseStoredValue = (storedValue) => {
  try {
    return JSON.parse(storedValue);
  } catch (err) {
    return storedValue;
  }
};

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const isMounted = useRef(false);
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setValue(parseStoredValue(item));
      }
    } catch (e) {
      console.log(e);
    }
    return () => {
      isMounted.current = false;
    };
  }, [key]);

  useEffect(() => {
    if (isMounted.current) {
      window.localStorage.setItem(key, processStoredValue(value));
    } else {
      isMounted.current = true;
    }
  }, [key, value]);

  return [value, setValue];
}
