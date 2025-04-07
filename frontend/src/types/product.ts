export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  unit: Unit;
  minStockLevel?: number;
  image?: string;
  barcode?: string;
  tags?: string[];
  // Additional fields for Polish store products
  store?: Store;
  lastPriceUpdate?: Date;
  priceHistory?: PriceEntry[];
  brand?: string;
  weight?: number;
  weightUnit?: WeightUnit;
  promotionalPrice?: number;
  promotionValidUntil?: Date;
}

export type Store = 
  | 'Biedronka'
  | 'Lewiatan'
  | 'Delikatesy Centrum'
  | 'Lidl'
  | 'Kaufland'
  | 'Auchan'
  | 'Carrefour'
  | 'Other';

export type ProductCategory = 
  | 'Groceries'
  | 'Beverages'
  | 'Household'
  | 'Personal Care'
  | 'Snacks'
  | 'Dairy'
  | 'Meat'
  | 'Produce'
  | 'Frozen'
  | 'Pantry';

export type Unit = 
  | 'pieces'
  | 'kg'
  | 'g'
  | 'l'
  | 'ml'
  | 'pack';

export type WeightUnit =
  | 'g'
  | 'kg'
  | 'ml'
  | 'l';

export interface PriceEntry {
  price: number;
  store: Store;
  date: Date;
  isPromotional: boolean;
}

export interface ProductFormData extends Omit<Product, 'id'> {
  id?: string;
} 