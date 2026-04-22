import type { HistoryEntry } from '../types';
import { formatTime } from '../utils/time';

interface HistoryItemProps {
  entry: HistoryEntry;
  isLatest?: boolean;
}

export function HistoryItem({ entry, isLatest = false }: HistoryItemProps) {
  const isIncrement = entry.action === 'increment';
  const isDecrement = entry.action === 'decrement';
  
  const changeText = isIncrement ? '+1' : isDecrement ? '-1' : '0';
  const changeClass = isIncrement 
    ? 'text-primary bg-primary/10' 
    : isDecrement 
      ? 'text-error bg-error/10' 
      : 'text-on-surface-variant bg-surface-container';

  const formattedDate = new Date(entry.timestamp).toLocaleDateString('tr-TR');
  const formattedTime = formatTime(entry.timestamp);
  const dateTimeStr = `${formattedDate} ${formattedTime}`;

  const bgClass = isLatest 
    ? 'bg-surface-container-highest' 
    : 'bg-surface-container';
  
  const opacityClass = !isLatest && entry.action === 'reset' ? 'opacity-80' : '';

  return (
    <div className={`${bgClass} p-5 rounded-lg flex items-center justify-between group transition-colors duration-300 hover:bg-surface-bright ${opacityClass}`}>
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[0.75rem] text-on-surface-variant">{dateTimeStr}</span>
        <span className="font-mono text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
          {entry.value.toLocaleString('tr-TR')}
        </span>
      </div>
      <div className="flex items-center">
        <span className={`font-mono font-bold px-3 py-1 rounded text-sm ${changeClass}`}>
          {changeText}
        </span>
      </div>
    </div>
  );
}