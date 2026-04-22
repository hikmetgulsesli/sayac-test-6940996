import { useCounter } from '../hooks/useCounter';

export function CounterDisplay() {
  const { count } = useCounter();
  
  const displayValue = count.toLocaleString('tr-TR');
  
  return (
    <div className="relative z-10 text-center mb-16">
      <div className="text-glow text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-bold font-mono tracking-tighter leading-none text-on-surface">
        {displayValue}
      </div>
    </div>
  );
}