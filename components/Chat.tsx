import React, { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Shield, MoreVertical, CheckCheck, Ghost } from 'lucide-react';
import { Product, Message, Language, GhostRequest } from '../types';
import { LOCATION_CHIPS, TRANSLATIONS } from '../constants';

interface ChatProps {
  initialProduct?: Product | null;
  initialRequest?: GhostRequest | null;
  language: Language;
}

export const Chat: React.FC<ChatProps> = ({ initialProduct, initialRequest, language }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[language].chat;

  // Helper to determine partner details based on context
  const getPartnerDetails = () => {
    if (initialProduct) {
        return {
            name: initialProduct.sellerName,
            image: initialProduct.image,
            isVerified: true
        };
    }
    if (initialRequest) {
         const anonName = language === 'vi' ? "Sinh viên năm 2" : "2nd Year Student";
         return {
             name: initialRequest.isAnonymous ? anonName : "User",
             // Generic avatar for anonymous requests
             image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ghost",
             isVerified: false
         };
    }
    return {
        name: t.partner,
        image: "https://picsum.photos/200",
        isVerified: false
    };
  };

  const partner = getPartnerDetails();

  useEffect(() => {
    // Initialize chat based on context
    if (initialProduct) {
      setMessages([
        {
          id: 'm1',
          senderId: 'me',
          text: `Hi ${initialProduct.sellerName}, I'm interested in "${initialProduct.title}". Is it available for ${initialProduct.price.toLocaleString('vi-VN')}₫?`,
          timestamp: new Date()
        },
        {
           id: 'm2',
           senderId: 'them',
           text: `Hello! Yes, it is still available. When can you meet?`,
           timestamp: new Date(Date.now() + 1000 * 60) 
        }
      ]);
    } else if (initialRequest) {
      setMessages([
        {
            id: 'm1',
            senderId: 'me',
            text: language === 'vi' 
                ? `Chào bạn, mình có cuốn "${initialRequest.bookTitle}" mà bạn đang tìm. Bạn muốn mua giá bao nhiêu?`
                : `Hi, I have the "${initialRequest.bookTitle}" you are looking for. What is your budget?`,
            timestamp: new Date()
        }
      ]);
    } else {
        // Default chat state
        setMessages([
            {
               id: 'm0',
               senderId: 'them',
               text: "Hey, did you find the microeconomics book yet?",
               timestamp: new Date(Date.now() - 100000) 
            }
        ]);
    }
  }, [initialProduct, initialRequest, language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate reply
    setTimeout(() => {
        const reply: Message = {
            id: (Date.now() + 1).toString(),
            senderId: 'them',
            text: language === 'vi' ? "Tuyệt vời! Bạn có thể gửi ảnh sách cho mình được không?" : "That sounds great! Can you send me a picture of the book?",
            timestamp: new Date()
        }
        setMessages(prev => [...prev, reply]);
    }, 2000);
  };

  return (
    <div className="h-full flex flex-col bg-gray-50 overflow-hidden">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
            <div className="relative">
                <img src={partner.image} className="w-10 h-10 rounded-full object-cover bg-gray-100" alt="Avatar" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
                <h3 className="font-bold text-gray-800">{partner.name}</h3>
                <div className="flex items-center text-xs text-gray-500">
                   {partner.isVerified ? (
                     <>
                       <Shield size={12} className="text-green-600 mr-1" /> {t.verified}
                     </>
                   ) : (
                     <span className="italic">{language === 'vi' ? 'Đang tìm sách' : 'Looking for book'}</span>
                   )}
                </div>
            </div>
        </div>
        <button className="text-gray-400 hover:bg-gray-100 p-2 rounded-full">
            <MoreVertical size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
         {initialProduct && (
             <div className="flex justify-center mb-6">
                 <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-3 max-w-sm">
                     <img src={initialProduct.image} className="w-12 h-12 rounded object-cover" alt="Product" />
                     <div>
                         <p className="text-xs text-gray-500">{t.swapping}</p>
                         <p className="text-sm font-bold text-gray-800 line-clamp-1">{initialProduct.title}</p>
                         <p className="text-xs text-ftu-primary font-semibold">{initialProduct.price.toLocaleString('vi-VN')}₫</p>
                     </div>
                 </div>
             </div>
         )}

         {initialRequest && (
             <div className="flex justify-center mb-6">
                 <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-3 max-w-sm border border-teal-100">
                     <div className="w-12 h-12 rounded bg-teal-100 flex items-center justify-center text-teal-600">
                        <Ghost size={24} />
                     </div>
                     <div>
                         <p className="text-xs text-gray-500">{language === 'vi' ? 'Phản hồi yêu cầu:' : 'Replying to request:'}</p>
                         <p className="text-sm font-bold text-gray-800 line-clamp-1">{initialRequest.bookTitle}</p>
                         <p className="text-xs text-ftu-primary font-semibold">{initialRequest.budget || (language === 'vi' ? 'Thương lượng' : 'Negotiable')}</p>
                     </div>
                 </div>
             </div>
         )}

        {messages.map((msg) => {
            const isMe = msg.senderId === 'me';
            return (
                <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                    <div 
                        className={`
                            max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-sm
                            ${isMe 
                                ? 'bg-ftu-primary text-white rounded-br-none' 
                                : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'}
                        `}
                    >
                        {msg.text}
                        <div className={`text-[10px] mt-1 flex items-center gap-1 ${isMe ? 'text-red-200 justify-end' : 'text-gray-400'}`}>
                            {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            {isMe && <CheckCheck size={12} />}
                        </div>
                    </div>
                </div>
            );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-3">
        {/* Quick Location Chips */}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-2 scrollbar-hide">
            {LOCATION_CHIPS.map((chip, idx) => (
                <button 
                    key={idx}
                    onClick={() => handleSend(chip.text)}
                    className="flex items-center gap-1 whitespace-nowrap bg-green-50 hover:bg-green-100 text-green-700 text-xs px-3 py-1.5 rounded-full border border-green-200 transition-colors"
                >
                    <MapPin size={12} />
                    {chip.label}
                </button>
            ))}
        </div>

        <div className="flex items-center gap-2">
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.typeMessage}
                className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2.5 focus:ring-2 focus:ring-ftu-primary focus:bg-white transition-all outline-none"
            />
            <button 
                onClick={() => handleSend()}
                className="bg-ftu-primary hover:bg-red-900 text-white p-2.5 rounded-full shadow-md transition-colors disabled:opacity-50"
                disabled={!inputValue.trim()}
            >
                <Send size={20} />
            </button>
        </div>
      </div>
    </div>
  );
};