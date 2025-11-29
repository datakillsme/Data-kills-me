
import React, { useState } from 'react';
import { View, Product, Language, GhostRequest } from './types';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { ProductDetail } from './components/ProductDetail';
import { Chat } from './components/Chat';
import { GhostRequestModal } from './components/GhostRequestModal';
import { Profile } from './components/Profile';
import { Support } from './components/Support';
import { MOCK_REQUESTS, TRANSLATIONS, MOCK_PRODUCTS, MOCK_CURRENT_USER } from './constants';
import { Ghost, FileText } from 'lucide-react';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState<View>(View.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedRequest, setSelectedRequest] = useState<GhostRequest | null>(null);
  const [isGhostModalOpen, setIsGhostModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('vi'); // Default to VI for FTU context
  
  // Products state (combines Selling and Buying items)
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  // Mock Requests State for demo purposes
  const [requests, setRequests] = useState(MOCK_REQUESTS);

  const t = TRANSLATIONS[language].requests;

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActiveView(View.HOME);
  };

  const handleLogout = () => {
    alert(language === 'en' ? "You’ve logged out successfully." : "Đăng xuất thành công.");
    setIsLoggedIn(false);
    setActiveView(View.HOME);
    setSelectedProduct(null);
    setSelectedRequest(null);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setActiveView(View.PRODUCT_DETAIL);
  };

  const handleStartChat = (product: Product) => {
    setSelectedProduct(product);
    setSelectedRequest(null);
    setActiveView(View.CHAT);
  };

  const handleRequestReply = (request: GhostRequest) => {
    setSelectedRequest(request);
    setSelectedProduct(null);
    setActiveView(View.CHAT);
  };

  const handleGhostRequestSubmit = (title: string, budget: string, description: string, condition: string, isAnonymous: boolean) => {
    if (isAnonymous) {
        // Add to Ghost Requests List
        const newRequest: GhostRequest = {
            id: Date.now().toString(),
            requesterId: 'me',
            bookTitle: title,
            budget: budget,
            description: description,
            preferredCondition: condition as any,
            isAnonymous: true,
            timestamp: new Date()
        };
        setRequests([newRequest, ...requests]);
        alert(language === 'en' ? "Your Request has been broadcasted anonymously!" : "Yêu cầu ẩn danh của bạn đã được gửi!");
        setActiveView(View.REQUESTS);
    } else {
        // Add to Public Product Feed as 'BUYING'
        const newProduct: Product = {
            id: `req-${Date.now()}`,
            sellerId: MOCK_CURRENT_USER.id,
            sellerName: MOCK_CURRENT_USER.name,
            title: title,
            price: parseInt(budget.replace(/\D/g, '')) || 0, // Simple parse for demo
            image: '', // No image for requests
            condition: condition as any,
            includesNotes: false,
            description: description || 'No description.',
            category: 'Requested',
            status: 'Available',
            type: 'BUYING'
        };
        setProducts([newProduct, ...products]);
        alert(language === 'en' ? "Your Request has been posted to the feed!" : "Yêu cầu của bạn đã được đăng lên bảng tin!");
        setActiveView(View.HOME);
    }
    setIsGhostModalOpen(false);
  };

  // Simple Requests View Component (Inline for simplicity in this file structure)
  const RequestsView = () => (
    <div className="p-4 md:p-8 h-full overflow-y-auto bg-gray-50">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Ghost className="text-teal-600" /> {t.title}
            </h2>
            <button 
                onClick={() => setIsGhostModalOpen(true)}
                className="bg-ftu-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-red-900 transition"
            >
                {t.newRequest}
            </button>
        </div>
        <div className="space-y-4">
            {requests.map(req => (
                <div key={req.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold text-lg text-gray-900">{req.bookTitle}</span>
                            {req.isAnonymous && (
                                <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded-full border border-gray-200 uppercase tracking-wide font-semibold">
                                    {t.anonymousTag}
                                </span>
                            )}
                        </div>
                        {req.description && (
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{req.description}</p>
                        )}
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                             <div className="bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-1">
                                <span className="text-gray-400">Budget:</span>
                                <span className="text-green-600 font-medium">{req.budget || t.negotiable}</span>
                             </div>
                             {req.preferredCondition && req.preferredCondition !== 'Any' && (
                                <div className="bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-1">
                                    <span className="text-gray-400">Cond:</span>
                                    <span className="text-gray-700 font-medium">{req.preferredCondition}</span>
                                </div>
                             )}
                             <div className="bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-1">
                                <span className="text-gray-400">By:</span>
                                <span>{req.isAnonymous ? t.anonymousUser : t.user}</span>
                             </div>
                        </div>
                    </div>
                    <button 
                        onClick={() => handleRequestReply(req)}
                        className="text-ftu-primary bg-red-50 hover:bg-red-100 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors border border-red-100 text-center"
                    >
                        {t.iHaveThis}
                    </button>
                </div>
            ))}
        </div>
    </div>
  );

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} language={language} setLanguage={setLanguage} />;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        language={language} 
        setLanguage={setLanguage} 
      />
      
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar 
            activeView={activeView} 
            onChangeView={(view) => {
                setActiveView(view);
                setSidebarOpen(false); // Close on mobile after click
            }} 
            isOpen={sidebarOpen}
            language={language}
        />
        
        <main className="flex-1 relative w-full h-full">
          {activeView === View.HOME && (
            <Home 
                onProductClick={handleProductClick} 
                onGhostRequestClick={() => setIsGhostModalOpen(true)}
                language={language}
                products={products}
            />
          )}
          
          {activeView === View.PRODUCT_DETAIL && selectedProduct && (
            <ProductDetail 
                product={selectedProduct} 
                onBack={() => setActiveView(View.HOME)} 
                onChat={handleStartChat}
                language={language}
            />
          )}

          {activeView === View.CHAT && (
            <Chat 
                initialProduct={selectedProduct} 
                initialRequest={selectedRequest}
                language={language} 
            />
          )}

          {activeView === View.REQUESTS && <RequestsView />}
          
          {activeView === View.PROFILE && (
              <Profile user={MOCK_CURRENT_USER} language={language} onLogout={handleLogout} />
          )}

          {activeView === View.SUPPORT && (
              <Support language={language} />
          )}
        </main>
      </div>

      <GhostRequestModal 
        isOpen={isGhostModalOpen} 
        onClose={() => setIsGhostModalOpen(false)}
        onSubmit={handleGhostRequestSubmit}
        language={language}
      />
    </div>
  );
};

export default App;