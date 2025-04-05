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
}

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

export interface ProductFormData extends Omit<Product, 'id'> {
  id?: string;
} 