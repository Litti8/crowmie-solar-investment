export interface Project {
  _id: string;
  name: string;
  type: string;
  contract_name: string;
  power: string;
  address: string;
  price: number;
  total_supply: number;
  price_per_token: number;
  current_total_payments: number;
  total_rentability: number;
  tir: number;
  annual_return: number;
  principal_return: number;
  project_life: number;
  typology: string;
  status: string;
  show: boolean;
  created_at: string;
  updated_at: string;
  project_start: string;
  mainImage: string;
  color: string;
  descriptions: {
    es: string;
    en: string;
  };
  promoters: Promoter[];
  clients: Client[];
  locations: Location[];
  totalInvestors: number;
}

export interface Promoter {
  _id: string;
  name: string;
  links: Link[];
  created_at: string;
  updated_at: string;
  type: string;
  description: string;
  logo: string;
}

export interface Client {
  _id: string;
  name: string;
  links: Link[];
  created_at: string;
  updated_at: string;
  logo: string;
  descriptions: {
    en: string;
    es: string;
  };
}

export interface Link {
  link: string;
  type: string;
  _id: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  _id: string;
}