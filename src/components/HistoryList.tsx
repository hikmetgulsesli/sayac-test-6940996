import { useCounter } from '../hooks/useCounter';
import { HistoryItem } from './HistoryItem';

export function HistoryList() {
  const { history } = useCounter();

  if (history.length === 0) {
    return (
      <aside className="w-full lg:w-[400px] h-full bg-surface-container-low flex flex-col">
        <div className="px-8 py-6">
          <h2 className="font-headline text-[1.5rem] font-semibold text-on-surface tracking-tight">Gecmis Kayitlar</h2>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-6">
          <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center text-outline-variant">
            <span className="material-symbols-outlined text-[3rem] opacity-50">history_toggle_off</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-headline text-[1.125rem] font-medium text-on-surface">Henuz degisiklik yapilmadi.</h3>
            <p className="font-body text-[0.875rem] text-on-surface-variant max-w-[250px] mx-auto leading-relaxed">
              Islem gecmisiniz burada gorunecektir.
            </p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-full lg:w-[400px] flex flex-col pt-8 lg:pt-0">
      <div className="mb-6 flex justify-between items-end px-2">
        <h2 className="text-[1.5rem] font-semibold font-headline text-on-surface">Gecmis Kayitlar</h2>
        <span className="text-[0.75rem] font-medium text-on-surface-variant uppercase tracking-[0.05em]">Son {history.length}</span>
      </div>
      <div className="flex flex-col space-y-4">
        {history.map((entry, index) => (
          <HistoryItem
            key={entry.id}
            entry={entry}
            isLatest={index === 0}
          />
        ))}
      </div>
    </aside>
  );
}