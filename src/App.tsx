import { useState } from 'react';
import { CounterDisplay } from './components/CounterDisplay';
import { ActionButtons } from './components/ActionButtons';
import { HistoryList } from './components/HistoryList';
import { ThemeToggle } from './components/ThemeToggle';

export function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden">
      {/* SideNavBar (Web) */}
      <nav className="hidden md:flex flex-col h-full py-8 bg-surface-container-low w-64 fixed left-0 border-r-0 z-20">
        <div className="px-6 mb-12">
          <h1 className="text-lg font-black text-primary tracking-tight">PRECISION TECH</h1>
          <p className="font-body text-sm tracking-wide text-primary opacity-70 mt-1">V1.0.4-KINETIC</p>
        </div>
        <ul className="flex-1 overflow-y-auto space-y-2 px-4">
          <li>
            <a className="flex items-center px-6 py-3 bg-surface-container-high text-primary rounded-r-full mr-4 transition-colors duration-200" href="#">
              <span className="material-symbols-outlined mr-4">dashboard</span>
              <span className="font-medium text-sm">Panel</span>
            </a>
          </li>
          <li>
            <a className="flex items-center px-6 py-3 text-on-surface-variant hover:text-white hover:bg-surface-container rounded-r-full mr-4 transition-colors duration-200" href="#">
              <span className="material-symbols-outlined mr-4">history</span>
              <span className="font-medium text-sm">Gecmis</span>
            </a>
          </li>
          <li>
            <a className="flex items-center px-6 py-3 text-on-surface-variant hover:text-white hover:bg-surface-container rounded-r-full mr-4 transition-colors duration-200" href="#">
              <span className="material-symbols-outlined mr-4">query_stats</span>
              <span className="font-medium text-sm">Analiz</span>
            </a>
          </li>
          <li>
            <a className="flex items-center px-6 py-3 text-on-surface-variant hover:text-white hover:bg-surface-container rounded-r-full mr-4 transition-colors duration-200" href="#">
              <span className="material-symbols-outlined mr-4">settings</span>
              <span className="font-medium text-sm">Ayarlar</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:ml-64 relative min-h-screen">
        {/* TopAppBar (Mobile & Web) */}
        <header className="bg-surface-container-low flex justify-between items-center w-full px-6 py-4 z-10 sticky md:static">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4 text-primary"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="text-xl font-bold tracking-tighter text-primary">SAYAC</div>
          </div>
          <div className="flex items-center space-x-2 text-primary">
            <button className="p-2 rounded-full hover:bg-surface-container transition-all duration-300 active:scale-95 text-on-surface-variant">
              <span className="material-symbols-outlined">settings_input_antenna</span>
            </button>
            <ThemeToggle />
            <button className="p-2 rounded-full hover:bg-surface-container transition-all duration-300 active:scale-95 text-on-surface-variant">
              <span className="material-symbols-outlined">keyboard_command_key</span>
            </button>
          </div>
        </header>

        {/* Canvas */}
        <div className="flex-1 flex flex-col lg:flex-row p-6 md:p-8 lg:p-12 gap-8 overflow-y-auto">
          {/* Center Display Area (Panel) */}
          <div className="flex-1 flex flex-col items-center justify-center min-h-[614px] lg:min-h-0 relative">
            {/* Ambient Glow Behind Counter */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 bg-primary/10 rounded-full blur-[40px]"></div>
            </div>
            
            <CounterDisplay />
            <ActionButtons />
          </div>

          {/* History Sidebar */}
          <HistoryList />
        </div>
      </main>
    </div>
  );
}