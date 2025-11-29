import React, { useState } from 'react';
import { Bell, User, Search, Menu } from 'lucide-react';
import { MOCK_CURRENT_USER, TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface NavbarProps {
  toggleSidebar: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, language, setLanguage }) => {
  const t = TRANSLATIONS[language].navbar;

  return (
    <header className="bg-ftu-primary text-white h-16 shadow-md flex items-center justify-between px-4 z-20 sticky top-0">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-1 hover:bg-white/10 rounded lg:hidden">
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-3">
            {/* Custom Logo Small */}
            <div className="rounded-full w-10 h-10 flex items-center justify-center shadow-sm bg-ftu-primary border-2 border-white text-white">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M7 4h10v4h-6v2h4v3h-4v7H7V4z" />
               </svg>
            </div>
            <h1 className="font-bold text-lg tracking-tight hidden sm:block">FTU-Swap Hub</h1>
        </div>
      </div>

      <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
        <input 
            type="text" 
            placeholder={t.searchPlaceholder} 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-ftu-primary placeholder-red-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm font-medium"
        />
        <Search className="absolute left-3 top-2.5 text-red-400" size={16} />
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Language Toggle */}
        <button 
          onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
          className="px-2 py-1 rounded hover:bg-white/10 text-xs font-bold border border-white/30 transition-colors"
        >
          {language === 'en' ? 'VN 🇻🇳' : 'EN 🇺🇸'}
        </button>

        <button className="relative hover:bg-white/10 p-2 rounded-full transition">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2 border-l border-white/20 pl-2 sm:pl-4">
           <div className="text-right hidden sm:block">
             <p className="text-sm font-semibold leading-tight">{MOCK_CURRENT_USER.name}</p>
             <p className="text-xs text-yellow-300 flex items-center justify-end gap-1">
                {t.verifiedStudent} <span className="text-[10px]">✅</span>
             </p>
           </div>
           <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center overflow-hidden border border-white/30">
             <User size={20} />
           </div>
        </div>
      </div>
    </header>
  );
};