import React, { useState } from 'react';
import { X, Ghost, Shield, FileText, User, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, MOCK_CURRENT_USER } from '../constants';

interface GhostRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, budget: string, description: string, condition: string, isAnonymous: boolean) => void;
  language: Language;
}

export const GhostRequestModal: React.FC<GhostRequestModalProps> = ({ isOpen, onClose, onSubmit, language }) => {
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('Any');
  const [isAnonymous, setIsAnonymous] = useState(false); // Default to Normal mode
  const t = TRANSLATIONS[language].ghostModal;

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, budget, description, condition, isAnonymous);
    // Reset
    setTitle('');
    setBudget('');
    setDescription('');
    setCondition('Any');
    setIsAnonymous(false);
    onClose();
  };

  const toggleAnonymous = () => {
    setIsAnonymous(!isAnonymous);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className={`
             text-white p-6 flex justify-between items-start relative overflow-hidden transition-colors duration-500
             ${isAnonymous ? 'bg-gray-900' : 'bg-ftu-primary'}
        `}>
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <div className={`p-1.5 rounded-lg ${isAnonymous ? 'bg-teal-500/20' : 'bg-white/20'}`}>
                      {isAnonymous ? <Ghost className="text-teal-400" size={24} /> : <FileText className="text-white" size={24} />}
                    </div>
                    <h2 className="text-xl font-bold">{t.title}</h2>
                </div>
                <p className={`text-sm ${isAnonymous ? 'text-gray-300' : 'text-red-100'}`}>{t.subtitle}</p>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white transition z-10">
                <X size={24} />
            </button>
            
            {/* Background decorative element */}
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -mr-10 -mt-10 pointer-events-none ${isAnonymous ? 'bg-teal-500/10' : 'bg-white/10'}`}></div>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Identity Mode Switcher */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-3 border-b border-gray-100 flex justify-between items-center bg-gray-100/50">
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{t.postingAs}</span>
                     <button 
                        type="button" 
                        onClick={toggleAnonymous}
                        className="text-xs font-bold text-teal-600 hover:text-teal-700 hover:underline cursor-pointer"
                     >
                        {isAnonymous ? t.revealPrompt : t.shyPrompt}
                     </button>
                </div>
                
                <div className="p-4 flex items-center gap-4 transition-all duration-300">
                     <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center border-2 shadow-sm flex-shrink-0 transition-colors duration-300
                        ${isAnonymous ? 'bg-gray-800 border-gray-700' : 'bg-white border-green-100'}
                     `}>
                        {isAnonymous ? (
                             <Ghost size={24} className="text-teal-400" />
                        ) : (
                             <img src={MOCK_CURRENT_USER.avatar} alt="User" className="w-full h-full rounded-full object-cover" />
                        )}
                     </div>

                     <div className="flex-1">
                        <h3 className={`font-bold text-lg transition-colors duration-300 ${isAnonymous ? 'text-gray-800' : 'text-ftu-primary'}`}>
                            {isAnonymous ? (language === 'en' ? '2nd Year Student' : 'Sinh viên năm 2') : MOCK_CURRENT_USER.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                             <span className={`
                                text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1
                                ${isAnonymous ? 'bg-gray-200 text-gray-600' : 'bg-green-100 text-green-700'}
                             `}>
                                {isAnonymous ? (
                                    <>
                                       <Ghost size={10} /> {t.modeGhost}
                                    </>
                                ) : (
                                    <>
                                       <CheckCircle2 size={10} /> {t.modeNormal}
                                    </>
                                )}
                             </span>
                        </div>
                     </div>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.labelItem}</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={t.placeholderItem} 
                    className={`
                        w-full px-4 py-3 border rounded-lg outline-none transition
                        ${isAnonymous 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-ftu-primary'}
                    `}
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.labelBudget}</label>
                  <input 
                      type="text" 
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder={t.placeholderBudget} 
                      className={`
                        w-full px-4 py-3 border rounded-lg outline-none transition
                        ${isAnonymous 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-ftu-primary'}
                    `}
                  />
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.labelCondition}</label>
                  <select
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      className={`
                        w-full px-4 py-3 border rounded-lg outline-none transition appearance-none
                        ${isAnonymous 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-ftu-primary'}
                    `}
                  >
                    <option value="Any">{t.conditions.any}</option>
                    <option value="Like New">{t.conditions.new}</option>
                    <option value="Good">{t.conditions.good}</option>
                    <option value="Fair">{t.conditions.fair}</option>
                  </select>
              </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.labelDesc}</label>
                <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={t.placeholderDesc}
                    rows={3}
                    className={`
                        w-full px-4 py-3 border rounded-lg outline-none transition resize-none
                        ${isAnonymous 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-ftu-primary'}
                    `}
                />
            </div>

            <button 
                type="submit"
                className={`
                    w-full py-3.5 font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2
                    ${isAnonymous 
                        ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                        : 'bg-ftu-primary hover:bg-red-900 text-white'}
                `}
            >
                {isAnonymous ? <Ghost size={20} /> : <Shield size={20} />}
                {t.submit}
            </button>
        </form>
      </div>
    </div>
  );
};