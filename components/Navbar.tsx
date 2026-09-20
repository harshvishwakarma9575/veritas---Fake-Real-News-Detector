import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-emerald-400" />
            <span className="font-bold text-xl tracking-tight">Veritas</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              How it Works
            </button>
        
          </div>
        </div>
      </div>
    </nav>
  );
};

