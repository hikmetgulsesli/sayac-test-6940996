import { useState, useCallback, useEffect } from 'react';
import { Theme } from '../types';
import { getItem, setItem } from '../utils/storage';

const THEME_KEY = 'theme';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    getItem<Theme>(THEME_KEY, 'dark')
  );

  useEffect(() => {
    setItem(THEME_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
