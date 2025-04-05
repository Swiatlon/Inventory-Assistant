import { FC } from 'react';
import { 
  Box, 
  TextField, 
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  SelectChangeEvent,
  IconButton,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { ProductCategory } from '@/types/product';

interface ProductSearchProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategories: ProductCategory[];
  onCategoryChange: (categories: ProductCategory[]) => void;
}

export const ProductSearch: FC<ProductSearchProps> = ({
  search,
  onSearchChange,
  selectedCategories,
  onCategoryChange,
}) => {
  const categories: ProductCategory[] = [
    'Groceries',
    'Beverages',
    'Household',
    'Personal Care',
    'Snacks',
    'Dairy',
    'Meat',
    'Produce',
    'Frozen',
    'Pantry'
  ];

  const handleCategoryChange = (event: SelectChangeEvent<ProductCategory[]>) => {
    const value = event.target.value;
    onCategoryChange(typeof value === 'string' ? [value as ProductCategory] : value as ProductCategory[]);
  };

  const handleClearCategories = () => {
    onCategoryChange([]);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        gap: 2,
        mb: 3,
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'stretch', sm: 'flex-start' }
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: search && (
            <InputAdornment position="end">
              <IconButton
                size="small"
                onClick={() => onSearchChange('')}
                edge="end"
                aria-label="clear search"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ flex: 1 }}
      />
      <FormControl sx={{ width: { xs: '100%', sm: 220 } }}>
        <InputLabel id="category-filter-label">Categories</InputLabel>
        <Select
          labelId="category-filter-label"
          id="category-filter"
          multiple
          value={selectedCategories}
          onChange={handleCategoryChange}
          label="Categories"
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Categories</Typography>
              {selected.length > 0 && (
                <Chip 
                  label={selected.length} 
                  size="small" 
                  sx={{ 
                    ml: 1,
                    height: 20,
                    '& .MuiChip-label': {
                      px: 1,
                    }
                  }} 
                />
              )}
            </Box>
          )}
          endAdornment={selectedCategories.length > 0 && (
            <IconButton
              size="small"
              onClick={handleClearCategories}
              sx={{ mr: 2 }}
              aria-label="clear categories"
            >
              <ClearIcon />
            </IconButton>
          )}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}; 