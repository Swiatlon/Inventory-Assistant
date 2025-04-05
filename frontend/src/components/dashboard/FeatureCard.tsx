import { ReactNode } from 'react';
import { Paper, Typography, Box, SxProps, Theme } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const MotionPaper = motion(Paper);

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  path: string;
  color: string;
  gradient: string;
}

export const FeatureCard = ({ title, description, icon, path, color, gradient }: FeatureCardProps) => {
  const router = useRouter();

  return (
    <MotionPaper
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      sx={{
        p: 3,
        height: '100%',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2,
        background: (theme) => theme.palette.mode === 'dark' 
          ? `linear-gradient(135deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[800]} 100%)`
          : '#fff',
        borderTop: `3px solid ${color}`
      }}
      onClick={() => router.push(path)}
    >
      <Box sx={{ 
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        mb: 2
      }}>
        <Box 
          sx={{ 
            width: 32,
            height: 32,
            borderRadius: 1,
            background: gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: `0 4px 14px ${color}30`
          }}
        >
          <Box sx={{ color: '#fff', display: 'flex', '& svg': { fontSize: 18 } }}>
            {icon}
          </Box>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
        {description}
      </Typography>
    </MotionPaper>
  );
}; 