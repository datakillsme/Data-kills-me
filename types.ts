
export type Language = 'en' | 'vi';

export interface User {
  id: string;
  name: string;
  email: string;
  isVerified: boolean;
  avatar?: string;
  trustScore: number;
  cohort: string;
  itemsSold: number;
  responseTime: string;
  joinedDate: string;
}

export interface Product {
  id: string;
  sellerId: string;
  sellerName: string;
  title: string;
  price: number;
  image: string;
  condition: 'Like New' | 'Good' | 'Fair';
  includesNotes: boolean;
  description: string;
  category: string;
  status: 'Available' | 'Sold';
  type?: 'SELLING' | 'BUYING';
}

export interface GhostRequest {
  id: string;
  requesterId: string;
  bookTitle: string;
  description?: string;
  preferredCondition: 'Like New' | 'Good' | 'Fair' | 'Any';
  budget: string;
  isAnonymous: boolean;
  timestamp: Date;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  isSystem?: boolean;
}

export enum View {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  PRODUCT_DETAIL = 'PRODUCT_DETAIL',
  CHAT = 'CHAT',
  REQUESTS = 'REQUESTS',
  PROFILE = 'PROFILE',
  SUPPORT = 'SUPPORT'
}
