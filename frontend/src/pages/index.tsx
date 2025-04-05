import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { WelcomeSection } from '@/components/dashboard/WelcomeSection';
import { FeatureGrid } from '@/components/dashboard/FeatureGrid';
import { ActionButtons } from '@/components/dashboard/ActionButtons';

const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <Container maxWidth="lg">
      <MotionBox 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: {xs: 4, md: 6, lg: 8},
          pt: { xs: 4, md: 6 },
          pb: { xs: 3, md: 4 }
        }}
      >
        <WelcomeSection />
        <FeatureGrid />
        <ActionButtons />
      </MotionBox>
    </Container>
  );
} 