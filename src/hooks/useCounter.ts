import { useState, useEffect, useCallback } from 'react';
import type { CounterState } from '../types';
import { getItem, setItem } from '../utils/storage';

const COUNTER_STORAGE_KEY = 'counter';
const HISTORY_LIMIT = 10;

function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function useCounter() {
  const [state, setState] = useState<CounterState>(() => {
    const stored = getItem<CounterState | null>(COUNTER_STORAGE_KEY, null);
    if (stored) {
      return stored;
    }
    return { count: 0, history: [] };
  });

  useEffect(() => {
    setItem(COUNTER_STORAGE_KEY, state);
  }, [state]);

  const increment = useCallback(() => {
    setState(prev => ({
      count: prev.count + 1,
      history: [
        {
          id: generateId(),
          value: prev.count + 1,
          timestamp: Date.now(),
          action: 'increment'
        },
        ...prev.history.slice(0, HISTORY_LIMIT - 1)
      ]
    }));
  }, []);

  const decrement = useCallback(() => {
    setState(prev => ({
      count: Math.max(0, prev.count - 1),
      history: [
        {
          id: generateId(),
          value: Math.max(0, prev.count - 1),
          timestamp: Date.now(),
          action: 'decrement'
        },
        ...prev.history.slice(0, HISTORY_LIMIT - 1)
      ]
    }));
  }, []);

  const reset = useCallback(() => {
    setState({
      count: 0,
      history: []
    });
  }, []);

  return {
    count: state.count,
    history: state.history,
    increment,
    decrement,
    reset
  };
}