import { useState, useCallback } from 'react';
import { getItem, setItem } from '../utils/storage';

const COUNT_KEY = 'count';

export function useCounter() {
  const [count, setCount] = useState<number>(() => getItem<number>(COUNT_KEY, 0));

  const increment = useCallback(() => {
    setCount((c) => {
      const next = c + 1;
      setItem(COUNT_KEY, next);
      return next;
    });
  }, []);

  const decrement = useCallback(() => {
    setCount((c) => {
      const next = c - 1;
      setItem(COUNT_KEY, next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setCount(0);
    setItem(COUNT_KEY, 0);
  }, []);

  return { count, increment, decrement, reset };
}
