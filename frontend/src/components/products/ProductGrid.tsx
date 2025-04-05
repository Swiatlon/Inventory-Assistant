import { FC, useState, useMemo } from 'react';
import { Box, Stack } from '@mui/material';
import { Product, ProductCategory } from '@/types/product';
import { ProductCard } from './ProductCard';
import { ProductSearch } from './ProductSearch';

interface ProductGridProps {
  products: Product[];
  onAddToList?: (product: Product) => void;
  onEdit?: (product: Product) => void;
}

export const ProductGrid: FC<ProductGridProps> = ({ products, onAddToList, onEdit }) => {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>([]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = search === '' || 
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description?.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(product.category);

      return matchesSearch && matchesCategory;
    });
  }, [products, search, selectedCategories]);

  return (
    <Stack spacing={3} width="100%">
      <ProductSearch 
        search={search}
        onSearchChange={setSearch}
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
      />
      
      <Box 
        sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          width: '100%',
          justifyContent: 'center'
        }}
      >
        {filteredProducts.map((product) => (
          <Box 
            key={product.id}
            sx={{
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 280,
              minWidth: 280,
              maxWidth: 400,
            }}
          >
            <ProductCard 
              product={product}
              onAddToList={onAddToList ? () => onAddToList(product) : undefined}
              onEdit={onEdit ? () => onEdit(product) : undefined}
            />
          </Box>
        ))}
      </Box>
    </Stack>
  );
}; 