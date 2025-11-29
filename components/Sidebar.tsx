
import React from 'react';
import { Home, MessageCircle, HelpCircle, ShieldCheck, Ghost } from 'lucide-react';
import { View, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface SidebarProps {
  activeView: View;
  onChangeView: (view: View) => void;
  isOpen: boolean;
  language: Language;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onChangeView, isOpen, language }) => {
  const t = TRANSLATIONS[language].sidebar;

  const menuItems = [
    { id: View.HOME, label: t.home, icon: Home },
    { id: View.REQUESTS, label: t.requests, icon: Ghost },
    { id: View.CHAT, label: t.chat, icon: MessageCircle },
    { id: View.PROFILE, label: t.profile, icon: ShieldCheck },
  ];

  return (
    <aside 
        className={`
            fixed lg:static top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 w-64 transform transition-transform duration-300 ease-in-out z-10
            ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
    >
      <div className="p-4 border-b border-gray-100 bg-red-50">
         <h2 className="text-xs font-bold text-red-800 uppercase tracking-wider mb-1">{t.menuTitle}</h2>
         <p className="text-[10px] text-gray-500">Foreign Trade University</p>
      </div>

      <nav className="mt-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onChangeView(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors
                    ${isActive 
                        ? 'bg-red-100 text-ftu-primary border-l-4 border-ftu-primary' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  <Icon size={18} className={isActive ? 'text-ftu-primary' : 'text-gray-400'} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-0 w-full p-4 bg-gray-50 border-t border-gray-200">
        <button 
            onClick={() => onChangeView(View.SUPPORT)}
            className={`
                w-full flex items-center gap-2 text-xs font-medium px-2 py-2 rounded transition-colors text-left
                ${activeView === View.SUPPORT 
                    ? 'text-ftu-primary bg-red-50 font-bold' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}
            `}
        >
            <HelpCircle size={14} />
            <span>{t.support}</span>
        </button>
      </div>
    </aside>
  );
};
