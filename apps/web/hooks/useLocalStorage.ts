"use client";

import { useState } from "react";

const processStoredValue = (storedValue) => {
  try {
    return JSON.parse(storedValue);
  } catch (err) {
    return storedValue;
  }
};
function useLocalStorage(key, initialValue) {
  const isClient = typeof window !== "undefined";
  if (!isClient) {
    return [initialValue, () => {}, () => {}];
  }

  // Retrieve the initial value from localStorage if it exists
  const storedValue = localStorage.getItem(key);

  // Create state with the initial value or the one from localStorage
  const [value, setValue] = useState(
    storedValue ? processStoredValue(storedValue) : initialValue
  );

  // Function to update and store the value in localStorage
  const setStoredValue = (newValue, raw = false) => {
    // Update the state
    setValue(newValue);
    // Store in localStorage
    if (raw) {
      localStorage.setItem(key, newValue);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  // Function to remove the key and its value from localStorage
  const removeStoredValue = () => {
    // Remove from state
    setValue(null);
    // Remove from localStorage
    localStorage.removeItem(key);
  };

  return [value, setStoredValue, removeStoredValue];
}

export default useLocalStorage;
