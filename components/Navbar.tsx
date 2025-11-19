import React from 'react';
import { Monitor, Cpu, User, Home, BookOpen } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: ViewState.HOME, label: 'Beranda', icon: Home },
    { id: ViewState.HARDWARE, label: 'Hardware', icon: Cpu },
    { id: ViewState.SOFTWARE, label: 'Software', icon: Monitor },
    { id: ViewState.BRAINWARE, label: 'Brainware', icon: User },
    { id: ViewState.QUIZ, label: 'Kuis AI', icon: BookOpen },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setView(ViewState.HOME)}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              SysCom Edu
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setView(item.id)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button (simplified for demo) */}
          <div className="md:hidden flex">
            <button onClick={() => setView(ViewState.HOME)} className="text-slate-300">
               <Home />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (Simple Bottom Bar for mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 flex justify-around p-2 z-50 pb-safe">
         {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`flex flex-col items-center p-2 ${currentView === item.id ? 'text-blue-500' : 'text-slate-400'}`}
            >
               <item.icon className="w-6 h-6" />
               <span className="text-[10px] mt-1">{item.label}</span>
            </button>
         ))}
      </div>
    </nav>
  );
};

export default Navbar;
