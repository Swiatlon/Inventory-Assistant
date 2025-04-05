import { Box, Typography, Paper, Grid } from '@mui/material';
import { Inventory as InventoryIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Inventory Assistant
      </Typography>
      <Typography variant="body1" paragraph>
        Keep track of your household items and manage your shopping lists efficiently.
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <InventoryIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Manage Inventory
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Track your household items, set quantities, and monitor expiration dates.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Shopping Lists
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Create and manage shopping lists based on your inventory needs.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
} 