import { useCounter } from './hooks/useCounter';
import { useHistory } from './hooks/useHistory';
import { useTheme } from './hooks/useTheme';
import { formatTime } from './utils/time';
import './index.css';

export default function App() {
  const { count, increment, decrement, reset } = useCounter();
  const { history, addEntry, clearHistory } = useHistory();
  const { theme, toggleTheme } = useTheme();

  function handleIncrement() {
    increment();
    addEntry(count + 1, 'increment');
  }

  function handleDecrement() {
    decrement();
    addEntry(count - 1, 'decrement');
  }

  function handleReset() {
    reset();
    clearHistory();
    addEntry(0, 'reset');
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: 'var(--color-surface-dim)',
        color: 'var(--color-on-surface)',
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* Ust Bar */}
      <header
        className="flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: 'var(--color-surface-container)' }}
      >
        <h1
          className="text-lg font-semibold"
          style={{ color: 'var(--color-primary)' }}
        >
          Sayac
        </h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-all duration-300 active:scale-95"
          style={{
            color: 'var(--color-primary)',
            backgroundColor: 'transparent',
          }}
          aria-label="Tema degistir"
        >
          <span className="material-symbols-outlined">
            {theme === 'dark' ? 'dark_mode' : 'light_mode'}
          </span>
        </button>
      </header>

      {/* Ana Icerik */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 gap-8">
        {/* Sayac degeri */}
        <div className="text-center">
          <div
            className="text-8xl font-bold"
            style={{ color: 'var(--color-primary)' }}
          >
            {count}
          </div>
        </div>

        {/* Butonlar */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleDecrement}
            className="flex items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 active:scale-95"
            style={{
              backgroundColor: 'var(--color-surface-container-highest)',
              color: 'var(--color-on-surface)',
            }}
            aria-label="Azalt"
          >
            <span className="material-symbols-outlined">remove</span>
          </button>

          <button
            onClick={handleReset}
            className="flex items-center justify-center w-16 h-16 rounded-xl border transition-all duration-300 active:scale-95"
            style={{
              borderColor: 'var(--color-outline)',
              color: 'var(--color-outline)',
            }}
            aria-label="Sifirla"
          >
            <span className="material-symbols-outlined">refresh</span>
          </button>

          <button
            onClick={handleIncrement}
            className="flex items-center justify-center w-24 h-24 rounded-xl transition-all duration-300 active:scale-95"
            style={{
              backgroundColor: 'var(--color-primary-container)',
              color: 'var(--color-surface-container-lowest)',
            }}
            aria-label="Artir"
          >
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>

        {/* Gecmis */}
        <div
          className="w-full max-w-sm rounded-xl p-4"
          style={{ backgroundColor: 'var(--color-surface-container)' }}
        >
          <h2
            className="text-sm font-medium mb-3"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Son 10 Degisiklik
          </h2>
          {history.length === 0 ? (
            <p
              className="text-sm"
              style={{ color: 'var(--color-outline)' }}
            >
              Henuz degisiklik yok
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {history.map((entry) => (
                <li
                  key={entry.id}
                  className="flex items-center justify-between text-sm"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-base"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {entry.action === 'increment'
                        ? 'arrow_upward'
                        : entry.action === 'decrement'
                        ? 'arrow_downward'
                        : 'refresh'}
                    </span>
                    <span>{entry.value}</span>
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: 'var(--color-outline)' }}
                  >
                    {formatTime(entry.timestamp)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
