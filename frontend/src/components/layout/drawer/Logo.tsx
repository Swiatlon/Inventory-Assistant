import React from 'react';
import { Box, Typography, TypographyVariant } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const sizes = {
    small: { icon: 24, text: 'subtitle1' },
    medium: { icon: 28, text: 'h6' },
    large: { icon: 32, text: 'h5' },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        py: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: sizes[size].icon * 1.5,
          height: sizes[size].icon * 1.5,
          borderRadius: 2,
          background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
          boxShadow: '0 2px 8px rgba(33, 150, 243, 0.15)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(33, 150, 243, 0.25)',
          },
        }}
      >
        <InventoryIcon
          sx={{
            fontSize: sizes[size].icon,
            color: '#fff',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'rotate(10deg)',
            },
          }}
        />
      </Box>
      <Typography
        variant={sizes[size].text as TypographyVariant}
        component="div"
        sx={{
          fontWeight: 600,
          letterSpacing: '0.5px',
          color: 'text.primary',
          fontSize: sizes[size].icon * 0.75,
          transition: 'color 0.2s ease-in-out',
        }}
      >
        Inventory Assistant
      </Typography>
    </Box>
  );
}; 