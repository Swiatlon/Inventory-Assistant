import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const containerVariants = {
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

export const WelcomeSection = () => {
  return (
    <Box>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          textAlign: 'center'
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 3
          }}
        >
          Welcome to Inventory Assistant
        </Typography>

        <Typography 
          variant="h5" 
          sx={{ 
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
            mb: { xs: 2, md: 3 }
          }}
        >
          Streamline your household inventory management with smart tracking, automated shopping lists, and intelligent notifications.
        </Typography>
      </motion.div>
    </Box>
  );
}; 