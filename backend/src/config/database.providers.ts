import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { DATA_SOURCE } from 'src/common/constants/db.constants';

const isDevelopment = true;

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mongodb',
        url: configService.get<string>('DATABASE_URL'),
        database: configService.get<string>('DATABASE_NAME'),
        synchronize: true,
        logging: isDevelopment,
        logger: 'advanced-console',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        migrations: [`${__dirname}/../migrations/**/*{.ts,.js}`],
      });

      return dataSource.initialize();
    },
  },
];
