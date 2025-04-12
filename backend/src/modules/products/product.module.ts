
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { productProviders } from './products.providers';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  providers: [
    ...productProviders,
    ProductsService,
  ],
})

export class ProductModule {}
