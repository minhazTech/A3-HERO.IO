import { useState, useEffect } from "react";

// Ensure 'key' and 'initialValue' are defined here as arguments
const useLocalStorage = (key, initialValue) => {

  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    // Check if we're in the browser
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      // Accessing the 'key' passed into the hook
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Setter function
  const setValue = (value) => {
    try {
      // Support functional updates like setStoredValue(prev => [...prev, id])
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Sync state if the key changes
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (e) {
      console.error(e);
    }
  }, [key]); 

  return [storedValue, setValue];
};

export default useLocalStorage;