import React from 'react';
import { Box } from '@mui/material';
import { Logo } from './Logo';

interface DrawerHeaderProps {
  title?: string;
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        px: 2,
        py: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.default',
      }}
    >
      <Logo size="medium" />
    </Box>
  );
}; 