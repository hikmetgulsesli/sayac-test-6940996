import { useCounter } from '../hooks/useCounter';
import { useState } from 'react';
import { ResetConfirmModal } from './ResetConfirmModal';

export function ActionButtons() {
  const { increment, decrement, reset } = useCounter();
  const [showResetModal, setShowResetModal] = useState(false);

  const handleReset = () => {
    setShowResetModal(true);
  };

  const handleConfirmReset = () => {
    reset();
    setShowResetModal(false);
  };

  const handleCancelReset = () => {
    setShowResetModal(false);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
        {/* Azalt Button */}
        <button
          onClick={decrement}
          className="flex items-center justify-center px-8 py-4 bg-surface-container-highest rounded-xl text-on-surface hover:bg-surface-bright transition-colors duration-300 active:scale-95 ease-[cubic-bezier(0.4,0,0.2,1)] group"
        >
          <span className="material-symbols-outlined mr-3 text-[1.5rem]">remove</span>
          <span className="font-medium text-[0.75rem] tracking-[0.05em] uppercase">Azalt</span>
        </button>

        {/* Arttir Button (Primary CTA) */}
        <button
          onClick={increment}
          className="flex items-center justify-center px-10 py-5 rounded-xl text-surface-container-lowest transition-all duration-300 active:scale-95 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_20px_rgba(173,198,255,0.2)] hover:shadow-[0_0_30px_rgba(173,198,255,0.4)]"
          style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-container))' }}
        >
          <span className="material-symbols-outlined mr-3 text-[1.5rem]">add</span>
          <span className="font-bold text-[0.875rem] tracking-[0.05em] uppercase">Arttir</span>
        </button>

        {/* Sifirla Button */}
        <button
          onClick={handleReset}
          className="flex items-center justify-center px-8 py-4 rounded-xl text-outline border border-outline/15 hover:bg-surface-container hover:text-on-surface-variant transition-all duration-300 active:scale-95 ease-[cubic-bezier(0.4,0,0.2,1)] bg-transparent"
        >
          <span className="material-symbols-outlined mr-3 text-[1.5rem]">refresh</span>
          <span className="font-medium text-[0.75rem] tracking-[0.05em] uppercase">Sifirla</span>
        </button>
      </div>

      {showResetModal && (
        <ResetConfirmModal
          onConfirm={handleConfirmReset}
          onCancel={handleCancelReset}
        />
      )}
    </>
  );
}