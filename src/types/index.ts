export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  image: string;
  badge?: string;
  stockStatus: 'In Stock' | 'Wholesale Batch' | 'Made to Order' | 'Available for Procurement';
  minOrderQuantity: number;
  specifications: Record<string, string>;
  features: string[];
  suggestedUse: string;
  popular?: boolean;
}

export type ProductCategory =
  | 'laptops'
  | 'desktops'
  | 'monitors'
  | 'components'
  | 'storage'
  | 'networking'
  | 'peripherals'
  | 'software'
  | 'accessories';

export interface Solution {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  benefits: string[];
  targetSectors: string[];
  suggestedHardware: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: 'Core Supply' | 'Procurement' | 'Consultation' | 'Software';
  summary: string;
  description: string;
  deliverables: string[];
  process: { step: number; title: string; desc: string }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  slug: string;
  headline: string;
  description: string;
  keyChallenges: string[];
  technologySolutions: string[];
  recommendedHardware: string[];
}

export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Buying Guides' | 'Technology Guides' | 'Hardware Insights' | 'Business IT Tips';
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FAQItem {
  id: string;
  category: 'Wholesale & Orders' | 'Quotes & Pricing' | 'Logistics & Delivery' | 'Hardware & Warranty' | 'Software & Compliance';
  question: string;
  answer: string;
}

export interface QuoteRequestData {
  referenceId: string;
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  category: string;
  productOrService: string;
  quantity: string;
  budgetRange?: string;
  timeframe?: string;
  message: string;
  submittedAt: string;
}
