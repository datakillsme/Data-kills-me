import React from 'react';
import { ArrowLeft, MessageCircle, CheckCircle, ShieldCheck, BookOpen } from 'lucide-react';
import { Product, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onChat: (product: Product) => void;
  language: Language;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onChat, language }) => {
  const t = TRANSLATIONS[language].productDetail;

  return (
    <div className="h-full overflow-y-auto bg-gray-50 p-4 md:p-8">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-gray-500 hover:text-ftu-primary transition"
      >
        <ArrowLeft size={18} className="mr-2" /> {t.back}
      </button>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Image */}
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-200">
                <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden relative">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        {product.condition}
                    </span>
                    {product.includesNotes && (
                         <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                           {t.includesNotes}
                        </span>
                    )}
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-4">{t.description}</h2>
                <p className="text-gray-600 leading-relaxed">
                    {product.description}
                </p>
            </div>
        </div>

        {/* Right Column: Info & Action */}
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-ftu-primary">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
                <div className="text-3xl font-bold text-ftu-primary mb-6">
                    {product.price.toLocaleString('vi-VN')}₫
                </div>

                <div className="border-t border-b border-gray-100 py-4 mb-6 space-y-3">
                    <div className="flex items-center justify-between">
                         <span className="text-gray-500 text-sm">{t.seller}</span>
                         <span className="font-medium text-gray-900">{product.sellerName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                         <span className="text-gray-500 text-sm">{t.verification}</span>
                         <span className="flex items-center text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full border border-green-100">
                            FTU Student <CheckCircle size={12} className="ml-1" />
                         </span>
                    </div>
                    <div className="flex items-center justify-between">
                         <span className="text-gray-500 text-sm">{t.category}</span>
                         <span className="flex items-center text-gray-700 text-sm">
                            <BookOpen size={14} className="mr-1" /> {product.category}
                         </span>
                    </div>
                </div>

                <button 
                    onClick={() => onChat(product)}
                    className="w-full py-4 bg-ftu-primary text-white rounded-lg font-bold shadow-md hover:bg-red-900 hover:shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                    <MessageCircle size={20} />
                    {t.chatToBuy}
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                    {t.safeConnect}
                </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3">
                <ShieldCheck className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                    <h4 className="font-bold text-blue-900 text-sm">{t.safetyTitle}</h4>
                    <p className="text-xs text-blue-700 mt-1">
                        {t.safetyDesc}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};