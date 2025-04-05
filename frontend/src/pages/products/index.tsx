import { Container, Typography, Box } from '@mui/material';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Product } from '@/types/product';

// Sample data - this will be replaced with real data from an API later
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    description: 'Fresh organic bananas from Ecuador. Perfect for smoothies and healthy snacks.',
    price: 2.99,
    category: 'Produce',
    unit: 'kg',
    minStockLevel: 1,
    tags: ['organic', 'fruit'],
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&q=80'
  },
  {
    id: '2',
    name: 'Whole Milk',
    description: 'Fresh whole milk from local dairy farms. Rich in calcium and protein.',
    price: 3.49,
    category: 'Dairy',
    unit: 'l',
    minStockLevel: 2,
    tags: ['dairy', 'breakfast'],
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80'
  },
  {
    id: '3',
    name: 'Wheat Bread',
    description: 'Freshly baked whole wheat bread. High in fiber and perfect for sandwiches.',
    price: 2.49,
    category: 'Groceries',
    unit: 'pieces',
    minStockLevel: 1,
    tags: ['bread', 'bakery'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80'
  },
  {
    id: '4',
    name: 'Paper Towels',
    description: 'Premium quality paper towels. Super absorbent and durable.',
    price: 4.99,
    category: 'Household',
    unit: 'pack',
    minStockLevel: 2,
    tags: ['cleaning', 'household'],
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&q=80'
  }
];

export default function ProductsPage() {
  const handleAddToList = (product: Product) => {
    console.log('Add to list:', product);
    // TODO: Implement add to shopping list functionality
  };

  const handleEdit = (product: Product) => {
    console.log('Edit product:', product);
    // TODO: Implement edit product functionality
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 600,
            mb: 1
          }}
        >
          Products
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Browse available products and add them to your shopping list.
        </Typography>
      </Box>

      <ProductGrid 
        products={sampleProducts}
        onAddToList={handleAddToList}
        onEdit={handleEdit}
      />
    </Container>
  );
} 