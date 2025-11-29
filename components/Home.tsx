
import React from 'react';
import { Ghost, Filter, Tag, PlusCircle, Search } from 'lucide-react';
import { Product, Language } from '../types';
import { MOCK_PRODUCTS, TRANSLATIONS } from '../constants';

interface HomeProps {
  onProductClick: (product: Product) => void;
  onGhostRequestClick: () => void;
  language: Language;
  products: Product[];
}

export const Home: React.FC<HomeProps> = ({ onProductClick, onGhostRequestClick, language, products }) => {
  const t = TRANSLATIONS[language].home;

  return (
    <div className="h-full overflow-y-auto bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200 p-6 md:p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {t.heroTitle} <span className="text-ftu-primary">{t.heroSubtitle}</span>
        </h2>
        <p className="text-gray-500 mb-6 text-sm md:text-base">{t.heroDesc}</p>
        
        {/* Request Action Center - Combined Button */}
        <div className="max-w-xl mx-auto">
            <button 
                onClick={onGhostRequestClick}
                className="w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-red-200 transition-all group flex items-center justify-between relative overflow-hidden"
            >
                <div className="flex items-center gap-4">
                    <div className="bg-red-50 p-3 rounded-full text-ftu-primary group-hover:bg-red-100 transition-colors">
                        <PlusCircle size={24} />
                    </div>
                    <div className="text-left">
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-ftu-primary transition-colors">
                            {t.postRequestTitle}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500">
                             {t.postRequestDesc}
                        </p>
                    </div>
                </div>
                
                {/* Ghost Icon Indicator */}
                <div className="text-gray-300 group-hover:text-gray-500 transition-colors pr-2" title="Ghost Mode Available">
                    <Ghost size={20} />
                </div>
            </button>
        </div>
      </div>

      {/* Feed Section */}
      <div className="p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-6 bg-ftu-primary rounded-full"></span>
                {t.newArrivals}
            </h3>
            <button className="text-gray-500 hover:text-gray-800 flex items-center gap-1 text-sm bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
                <Filter size={16} /> {t.filter}
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <div 
                    key={product.id} 
                    onClick={() => onProductClick(product)}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group overflow-hidden flex flex-col h-full"
                >
                    {product.type === 'BUYING' ? (
                        <div className="p-6 flex flex-col h-full bg-gradient-to-br from-teal-50 to-white">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                                    Buying Request
                                </span>
                                <span className="text-gray-400 text-xs">Just now</span>
                            </div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">{product.title}</h4>
                            <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">
                                {product.description || "No description provided."}
                            </p>
                            <div className="pt-4 border-t border-teal-100 mt-auto">
                                <div className="flex justify-between items-center mb-1">
                                     <span className="text-xs text-gray-500">Budget</span>
                                     <span className="font-bold text-ftu-primary">{product.price.toLocaleString('vi-VN')}₫</span>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                     <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600">
                                        {product.sellerName.charAt(0)}
                                     </div>
                                     <span className="text-xs text-gray-500 font-medium">{product.sellerName}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-2 right-2">
                                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-sm">
                                        {product.condition}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h4 className="font-bold text-gray-900 line-clamp-1 mb-1" title={product.title}>{product.title}</h4>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-ftu-primary font-bold text-lg">{product.price.toLocaleString('vi-VN')}₫</span>
                                    {product.includesNotes && (
                                        <span className="text-[10px] bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                                            <Tag size={10} /> Notes
                                        </span>
                                    )}
                                </div>
                                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600">
                                        {product.sellerName.charAt(0)}
                                    </div>
                                    <span className="text-xs text-gray-500">{product.sellerName}</span>
                                    <span className="ml-auto text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded">Verified</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
