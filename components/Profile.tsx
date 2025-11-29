
import React from 'react';
import { Shield, CheckCircle2, Zap, Star, Clock, LogOut } from 'lucide-react';
import { User, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ProfileProps {
  user: User;
  language: Language;
  onLogout: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ user, language, onLogout }) => {
  const t = TRANSLATIONS[language].profile;

  return (
    <div className="flex justify-center p-4 md:p-8 h-full bg-gray-100 overflow-y-auto">
      <div className="w-full max-w-sm">
        
        {/* Card Container */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 relative">
            
            {/* Top Red Decoration Line (Simulated from ProductDetail theme) */}
            <div className="h-2 bg-ftu-primary w-full"></div>

            <div className="p-6 pb-8">
                {/* Header Label */}
                <div className="flex items-center gap-2 mb-6">
                    <Shield className="text-ftu-primary fill-current" size={20} />
                    <h2 className="text-lg font-bold text-gray-900">{t.header}</h2>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-3">
                        <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-teal-400 to-blue-500">
                            <img 
                                src={user.avatar} 
                                alt={user.name} 
                                className="w-full h-full rounded-full object-cover border-4 border-white"
                            />
                        </div>
                        {user.isVerified && (
                             <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                                 <CheckCircle2 className="text-blue-500 fill-blue-100" size={20} />
                             </div>
                        )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-500 font-medium">
                        {t.verifiedStudent} • {user.cohort}
                    </p>
                </div>

                {/* Safe Score Badge */}
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-green-50 text-green-700 px-6 py-2 rounded-lg border border-green-100 shadow-sm flex items-center gap-2">
                         <span className="text-2xl font-extrabold">{user.trustScore}%</span>
                         <span className="text-xs font-bold uppercase tracking-wider">{t.safeScore}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1.5 flex items-center gap-1">
                        <Shield size={10} /> {t.verifiedBy}
                    </span>
                </div>

                <hr className="border-gray-100 mb-6" />

                {/* Statistics Section */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{t.itemsSold}</span>
                        <span className="font-bold text-gray-900">{user.itemsSold}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{t.responseTime}</span>
                        <span className="font-bold text-gray-900">{user.responseTime}</span>
                    </div>
                    <div className="flex justify-between items-center col-span-2">
                        <span className="text-sm text-gray-500">{t.joined}</span>
                        <span className="font-bold text-gray-900">{user.joinedDate}</span>
                    </div>
                </div>

                {/* Micro Badges */}
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                     <span className="px-2 py-1 bg-yellow-50 text-yellow-700 text-[10px] font-bold rounded flex items-center gap-1 border border-yellow-100">
                        <Zap size={10} className="fill-current" /> {t.badges.fast}
                     </span>
                     <span className="px-2 py-1 bg-purple-50 text-purple-700 text-[10px] font-bold rounded flex items-center gap-1 border border-purple-100">
                        <Star size={10} className="fill-current" /> {t.badges.reliable}
                     </span>
                     <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded flex items-center gap-1 border border-blue-100">
                        <Clock size={10} /> {t.badges.longTerm}
                     </span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-lg hover:bg-gray-800 transition-all shadow-lg active:scale-95 mb-3">
                    {t.viewFull}
                </button>

                {/* Logout Button */}
                <button 
                    onClick={onLogout}
                    className="w-full bg-white text-gray-600 border border-gray-200 font-bold py-3.5 rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all flex items-center justify-center gap-2 group"
                >
                    <LogOut size={18} className="group-hover:text-red-600 text-gray-400" /> {t.logout}
                </button>

            </div>
        </div>
      </div>
    </div>
  );
};