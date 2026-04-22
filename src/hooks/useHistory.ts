import { useState, useCallback, useEffect } from 'react';
import { HistoryEntry } from '../types';
import { getItem, setItem } from '../utils/storage';

const HISTORY_KEY = 'history';
const MAX_HISTORY = 10;

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>(() =>
    getItem<HistoryEntry[]>(HISTORY_KEY, [])
  );

  useEffect(() => {
    setItem(HISTORY_KEY, history);
  }, [history]);

  const addEntry = useCallback(
    (value: number, action: HistoryEntry['action']) => {
      setHistory((prev) => {
        const entry: HistoryEntry = {
          id: generateId(),
          value,
          timestamp: Date.now(),
          action,
        };
        const updated = [entry, ...prev].slice(0, MAX_HISTORY);
        return updated;
      });
    },
    []
  );

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return { history, addEntry, clearHistory };
}
