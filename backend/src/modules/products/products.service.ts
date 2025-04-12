import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuidv4 } from 'uuid';
import { Product } from './interfaces/product.interface';



@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(dto: CreateProductDto): Product {
    const newProduct: Product = {
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...dto,
    };
    this.products.push(newProduct);

    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find(p => p.id === id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  update(id: string, dto: UpdateProductDto): Product {
    const product = this.findOne(id);
    const updatedProduct = { ...product, ...dto, updatedAt: new Date() };

    this.products = this.products.map(p => (p.id === id ? updatedProduct : p));

    return updatedProduct;
  }

  remove(id: string): void {
    const index = this.products.findIndex(p => p.id === id);

    if (index === -1) {
      throw new NotFoundException('Product not found');
    }

    this.products.splice(index, 1);
  }
}
