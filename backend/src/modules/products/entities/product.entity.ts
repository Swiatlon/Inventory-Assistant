import { ProductCategory, ProductStore } from '../../../common/constants/enums';

export class ProductEntity {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: ProductCategory;
  store: ProductStore;
  barcode?: string;
  brand?: string;
  weight?: number;
  weightUnit?: string;
  unit?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}
