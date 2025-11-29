
import React from 'react';
import { 
  HelpCircle, AlertTriangle, Mail, MessageCircle, 
  ShieldCheck, Book, Shield, Lock, Users, ExternalLink, Trash2 
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface SupportProps {
  language: Language;
}

export const Support: React.FC<SupportProps> = ({ language }) => {
  const t = TRANSLATIONS[language].support;

  return (
    <div className="h-full overflow-y-auto bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8 pb-10">
        
        {/* Header */}
        <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t.title}</h2>
            <p className="text-gray-500 mt-2">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Support Channels & Tips */}
            <div className="space-y-6">
                {/* Contact & Help */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <HelpCircle className="text-ftu-primary" /> {t.supportInfo.title}
                    </h3>
                    <div className="space-y-4">
                        <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors text-left">
                            <span className="font-medium text-gray-700">{t.supportInfo.helpCenter}</span>
                            <ExternalLink size={16} className="text-gray-400" />
                        </button>
                        <button className="w-full flex items-center justify-between p-3 rounded-lg bg-red-50 hover:bg-red-100 border border-red-100 transition-colors text-left group">
                            <span className="font-medium text-red-700 flex items-center gap-2">
                                <AlertTriangle size={18} /> {t.supportInfo.report}
                            </span>
                        </button>
                        <div className="pt-4 border-t border-gray-100 space-y-3">
                            <div className="flex items-center gap-3 text-gray-600">
                                <Mail size={18} className="text-gray-400" />
                                <span className="text-sm font-medium">{t.supportInfo.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MessageCircle size={18} />
                                <span className="text-sm font-medium italic">{t.supportInfo.liveChat}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Safety Tips */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-100 p-6">
                     <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                        <ShieldCheck className="text-green-600" /> {t.supportInfo.tipsTitle}
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                            <span className="text-sm text-green-900 font-medium">{t.supportInfo.tip1}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                            <span className="text-sm text-green-900 font-medium">{t.supportInfo.tip2}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                            <span className="text-sm text-green-900 font-medium">{t.supportInfo.tip3}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                            <span className="text-sm text-green-900 font-medium">{t.supportInfo.tip4}</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right Column: Policies & Actions */}
            <div className="space-y-6">
                {/* Policies Grid */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{t.policies.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                             <div className="flex items-center gap-2 mb-2 text-ftu-primary">
                                 <Book size={18} />
                                 <h4 className="font-bold text-sm">{t.policies.seller.title}</h4>
                             </div>
                             <p className="text-xs text-gray-600 leading-relaxed">{t.policies.seller.desc}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                             <div className="flex items-center gap-2 mb-2 text-blue-600">
                                 <Shield size={18} />
                                 <h4 className="font-bold text-sm">{t.policies.buyer.title}</h4>
                             </div>
                             <p className="text-xs text-gray-600 leading-relaxed">{t.policies.buyer.desc}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                             <div className="flex items-center gap-2 mb-2 text-purple-600">
                                 <Lock size={18} />
                                 <h4 className="font-bold text-sm">{t.policies.privacy.title}</h4>
                             </div>
                             <p className="text-xs text-gray-600 leading-relaxed">{t.policies.privacy.desc}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                             <div className="flex items-center gap-2 mb-2 text-orange-600">
                                 <Users size={18} />
                                 <h4 className="font-bold text-sm">{t.policies.community.title}</h4>
                             </div>
                             <p className="text-xs text-gray-600 leading-relaxed">{t.policies.community.desc}</p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="space-y-3">
                         <button className="w-full py-2.5 px-4 bg-gray-800 text-white rounded-lg font-medium text-sm hover:bg-gray-900 transition-colors shadow-sm">
                            {t.quickActions.viewPolicies}
                         </button>
                         <button className="w-full py-2.5 px-4 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors">
                            {t.quickActions.submitReport}
                         </button>
                         <div className="flex gap-3 pt-2">
                             <button className="flex-1 py-2 px-3 text-xs font-medium text-gray-500 hover:text-gray-800 bg-gray-50 rounded border border-transparent hover:border-gray-200 transition-colors">
                                {t.quickActions.requestReview}
                             </button>
                             <button className="flex-1 py-2 px-3 text-xs font-medium text-red-500 hover:text-red-700 bg-red-50/50 rounded border border-transparent hover:border-red-100 transition-colors flex items-center justify-center gap-1">
                                <Trash2 size={12} /> {t.quickActions.deleteData}
                             </button>
                         </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
