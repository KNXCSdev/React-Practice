import { useEffect, useState } from "react";
export default function useLocalStorage(keyName, initialValue) {
  const [todos, setTodos] = useState(function () {
    const storedValue = localStorage.getItem(keyName);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(todos));
  }, [keyName, todos]);

  return [todos, setTodos];
}
