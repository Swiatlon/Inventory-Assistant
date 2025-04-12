import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProductDto) {
    return this.prisma.products.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.products.findMany();
  }

  async findOne(id: string) {
    const product = await this.prisma.products.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(id: string, dto: UpdateProductDto) {
    try {
      return await this.prisma.products.update({
        where: { id },
        data: dto,
      });
    } catch (error) {
      throw new NotFoundException('Product not found');
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.products.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException('Product not found');
    }
  }
}
