import { IsEnum, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';
import { ProductCategory, ProductStore } from '../../../common/constants/enums';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @IsEnum(ProductCategory)
  category: ProductCategory;

  @IsEnum(ProductStore)
  store: ProductStore;

  @IsOptional()
  barcode?: string;

  @IsOptional()
  brand?: string;

  @IsOptional()
  weight?: number;

  @IsOptional()
  weightUnit?: string;

  @IsOptional()
  unit?: string;

  @IsOptional()
  image?: string;
}
