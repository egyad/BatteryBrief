export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Materials' | 'Mechanisms' | 'Data Viz' | 'Cover Art';
  imageUrl: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  features: string[];
  icon: string;
}

export interface ConceptSuggestion {
  style: string;
  description: string;
  rationale: string;
}

export enum ConceptStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}