# Inventory Assistant Backend

This is the backend for the Inventory Assistant application, built with NestJS and Prisma.

## Features

- RESTful API for product management
- MongoDB database integration with Prisma
- Type-safe database operations
- Input validation
- CORS support

## Prerequisites

- Node.js (v16 or higher)
- MongoDB database

## Installation

```bash
# Install dependencies
$ npm install

# Set up environment variables
$ cp .env.example .env
# Edit .env with your MongoDB connection string
```

## Database Setup

```bash
# Generate Prisma client
$ npx prisma generate

# Push schema to database
$ npx prisma db push

# Open Prisma Studio (optional)
$ npx prisma studio
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Endpoints

- `POST /products` - Create a new product
- `GET /products` - Get all products
- `GET /products/:id` - Get a specific product
- `PUT /products/:id` - Update a product
- `DELETE /products/:id` - Delete a product

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Project Structure

```
backend/
├── prisma/              # Prisma schema and migrations
├── src/
│   ├── common/          # Shared constants and utilities
│   ├── modules/         # Application modules
│   │   ├── prisma/      # Prisma service and module
│   │   └── products/    # Products module
│   ├── app.module.ts    # Root application module
│   └── main.ts          # Application entry point
├── test/                # Test files
├── .env                 # Environment variables
└── package.json         # Project dependencies
```

## License

This project is MIT licensed.
