
import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Globe } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LoginProps {
  onLogin: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin, language, setLanguage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const t = TRANSLATIONS[language].login;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (!email.endsWith('@ftu.edu.vn')) {
        setError(t.errorDomain);
        setIsLoading(false);
        return;
      }
      onLogin();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ftu-primary to-red-900 p-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <button 
          onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
          className="bg-white/10 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition"
        >
          <Globe size={14} />
          {language === 'en' ? 'VN 🇻🇳' : 'EN 🇺🇸'}
        </button>
      </div>
      
      <div className="bg-white w-full max-w-md rounded-lg shadow-2xl overflow-hidden">
        <div className="p-8 text-center pb-2">
          <div className="mx-auto w-28 h-28 mb-4 flex items-center justify-center">
            {/* Custom Logo: White F in Red Circle */}
            <div className="w-full h-full rounded-full bg-ftu-primary flex items-center justify-center shadow-xl border-4 border-red-50 relative group">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-16 h-16 relative z-10">
                  <path d="M7 4h10v4h-6v2h4v3h-4v7H7V4z" />
               </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{t.title}</h1>
          
          {/* Slogan Block */}
          <div className="mb-6 px-2">
            <p className="text-lg md:text-xl font-extrabold text-ftu-primary leading-tight">
              {language === 'en' 
                ? "“Swap to Save, Swap to Pave a Greener Wave.”" 
                : "“Đổi sách trao xanh – tiết kiệm thật nhanh.”"}
            </p>
          </div>
        </div>

        <div className="px-8 pb-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.emailLabel}</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-ftu-primary focus:border-ftu-primary transition-colors bg-white text-gray-900 placeholder-gray-400"
                />
                {email.endsWith('@ftu.edu.vn') && (
                  <CheckCircle2 className="absolute right-3 top-3 text-green-500" size={20} />
                )}
              </div>
              <p className="mt-1 text-xs text-gray-500">{t.emailHelp}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.passwordLabel}</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.passwordPlaceholder}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-ftu-primary focus:border-ftu-primary transition-colors bg-white text-gray-900 placeholder-gray-400"
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-800 p-3 rounded-md flex items-center text-sm">
                <AlertCircle size={16} className="mr-2 flex-shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ftu-primary hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ftu-primary transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? t.verifying : t.submitButton}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              {t.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
