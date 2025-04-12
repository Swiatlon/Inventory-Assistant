import { DataSource } from 'typeorm';
import { Product } from './product.entity';
import { DATA_SOURCE, PRODUCT_REPOSITORY } from 'src/common/constants/db.constants';

export const productProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: [DATA_SOURCE],
  },
];
