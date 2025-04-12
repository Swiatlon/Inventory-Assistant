import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import { PRODUCT_REPOSITORY } from "src/common/constants/db.constants";
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./product.entity";
import { ObjectId } from "mongodb";


@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(dto);

    return await this.productRepository.save(newProduct);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: ObjectId): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id: id });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(id: ObjectId, dto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    const updated = Object.assign(product, dto);

    return await this.productRepository.save(updated);
  }

  async remove(id: ObjectId): Promise<void> {
    const product = await this.findOne(id);

    await this.productRepository.remove(product);
  }
}
