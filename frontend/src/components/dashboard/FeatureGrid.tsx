import { Grid } from '@mui/material';
import { FeatureCard } from './FeatureCard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InsightsIcon from '@mui/icons-material/Insights';
import NotificationsIcon from '@mui/icons-material/Notifications';

const featureCards = [
  {
    title: 'Smart Inventory Management',
    description: 'Keep track of your items with automatic notifications for low stock and expiring products.',
    icon: <InventoryIcon />,
    path: '/inventory',
    color: '#2196F3',
    gradient: 'linear-gradient(135deg, #2196F3 0%, #64B5F6 100%)',
  },
  {
    title: 'Intelligent Shopping Lists',
    description: 'Generate shopping lists automatically based on your inventory levels and preferences.',
    icon: <ShoppingCartIcon />,
    path: '/shopping-list',
    color: '#4CAF50',
    gradient: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
  },
  {
    title: 'Usage Analytics',
    description: 'Track consumption patterns and optimize your inventory with data-driven insights.',
    icon: <InsightsIcon />,
    path: '/analytics',
    color: '#FF9800',
    gradient: 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)',
  },
  {
    title: 'Smart Notifications',
    description: 'Get timely alerts for restocking needs and expiring items to minimize waste.',
    icon: <NotificationsIcon />,
    path: '/notifications',
    color: '#E91E63',
    gradient: 'linear-gradient(135deg, #E91E63 0%, #F06292 100%)',
  },
];

export const FeatureGrid = () => {
  return (
    <Grid 
      container 
      spacing={3} 
      sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(2, 1fr)'
        },
        gap: 3,
        width: '100%',
        maxWidth: '100%'
      }}
    >
      {featureCards.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </Grid>
  );
}; 