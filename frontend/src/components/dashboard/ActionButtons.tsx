import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const ActionButtons = () => {
  const router = useRouter();

  return (
    <Box>
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}
      >
        <Button
          variant="contained"
          size="medium"
          startIcon={<InventoryIcon sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem' } }} />}
          onClick={() => router.push('/inventory')}
          sx={{ 
            minWidth: 'auto',
            px: { xs: 2, sm: 3 },
            py: { xs: 1, sm: 1.2 },
            borderRadius: 2,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 500,
            textTransform: 'none',
            letterSpacing: '0.3px',
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 2px 8px rgba(33, 150, 243, 0.3)',
            '&:hover': {
              background: 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
              boxShadow: '0 4px 12px rgba(33, 150, 243, 0.5)',
            }
          }}
        >
          Get Started
        </Button>
        <Button
          variant="contained"
          size="medium"
          startIcon={<ShoppingCartIcon sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem' } }} />}
          onClick={() => router.push('/shopping-list')}
          sx={{ 
            minWidth: 'auto',
            px: { xs: 2, sm: 3 },
            py: { xs: 1, sm: 1.2 },
            borderRadius: 2,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 500,
            textTransform: 'none',
            letterSpacing: '0.3px',
            background: 'linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)',
            boxShadow: '0 2px 8px rgba(76, 175, 80, 0.3)',
            '&:hover': {
              background: 'linear-gradient(45deg, #43A047 30%, #7CB342 90%)',
              boxShadow: '0 4px 12px rgba(76, 175, 80, 0.5)',
            }
          }}
        >
          Create Shopping List
        </Button>
      </motion.div>
    </Box>
  );
}; 