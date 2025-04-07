import { FC } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  InputAdornment,
} from '@mui/material';
import { Product, ProductCategory, Store, Unit, WeightUnit, ProductFormData } from '@/types/product';

interface ProductFormProps {
  initialData?: Product;
  onSubmit: (data: ProductFormData) => void;
  onCancel: () => void;
}

export const ProductForm: FC<ProductFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const productData: ProductFormData = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      price: Number(formData.get('price')),
      category: formData.get('category') as ProductCategory,
      unit: formData.get('unit') as Unit,
      store: formData.get('store') as Store,
      brand: formData.get('brand') as string,
      weight: formData.get('weight') ? Number(formData.get('weight')) : undefined,
      weightUnit: formData.get('weightUnit') as WeightUnit,
      barcode: formData.get('barcode') as string || undefined,
      promotionalPrice: formData.get('promotionalPrice') ? Number(formData.get('promotionalPrice')) : undefined,
    };

    onSubmit(productData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="name"
            label="Product Name"
            defaultValue={initialData?.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="brand"
            label="Brand"
            defaultValue={initialData?.brand}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="description"
            label="Description"
            multiline
            rows={2}
            defaultValue={initialData?.description}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel>Store</InputLabel>
            <Select
              name="store"
              label="Store"
              defaultValue={initialData?.store || ''}
            >
              {Object.values(Store).map((store) => (
                <MenuItem key={store} value={store}>
                  {store}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              label="Category"
              defaultValue={initialData?.category || ''}
            >
              {Object.values(ProductCategory).map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="price"
            label="Regular Price"
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">zł</InputAdornment>,
            }}
            defaultValue={initialData?.price}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="promotionalPrice"
            label="Promotional Price"
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">zł</InputAdornment>,
            }}
            defaultValue={initialData?.promotionalPrice}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="weight"
            label="Weight/Volume"
            type="number"
            defaultValue={initialData?.weight}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Weight Unit</InputLabel>
            <Select
              name="weightUnit"
              label="Weight Unit"
              defaultValue={initialData?.weightUnit || ''}
            >
              {Object.values(WeightUnit).map((unit) => (
                <MenuItem key={unit} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth required>
            <InputLabel>Unit</InputLabel>
            <Select
              name="unit"
              label="Unit"
              defaultValue={initialData?.unit || ''}
            >
              {Object.values(Unit).map((unit) => (
                <MenuItem key={unit} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="barcode"
            label="Barcode"
            defaultValue={initialData?.barcode}
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              {initialData ? 'Update Product' : 'Add Product'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}; 