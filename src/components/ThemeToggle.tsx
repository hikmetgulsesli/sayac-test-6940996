import { useEffect } from 'react';
import { getItem, setItem } from '../utils/storage';
import type { Theme } from '../types';

const THEME_STORAGE_KEY = 'theme';

export function useTheme() {
  const storedTheme = getItem<Theme>('theme', 'dark');
  
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(storedTheme);
  }, [storedTheme]);

  const toggleTheme = () => {
    const newTheme: Theme = storedTheme === 'dark' ? 'light' : 'dark';
    setItem(THEME_STORAGE_KEY, newTheme);
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
  };

  return {
    theme: storedTheme,
    toggleTheme
  };
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-[#191f2f] transition-all duration-300 active:scale-95 text-[#c2c6d6] hover:text-on-surface"
      aria-label={theme === 'dark' ? 'Acik moda gec' : 'Karanlik moda gec'}
    >
      <span className="material-symbols-outlined">
        {theme === 'dark' ? 'dark_mode' : 'light_mode'}
      </span>
    </button>
  );
}