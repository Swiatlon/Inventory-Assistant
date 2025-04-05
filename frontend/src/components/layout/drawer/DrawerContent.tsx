import React from 'react';
import { Box } from '@mui/material';
import { DrawerHeader } from './DrawerHeader';
import { NavigationList } from './NavigationList';
import { MenuItem } from '../../../types/layout';

interface DrawerContentProps {
  items: MenuItem[];
  currentPath: string;
  onItemClick: (path: string) => void;
}

export const DrawerContent: React.FC<DrawerContentProps> = ({
  items,
  currentPath,
  onItemClick,
}) => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <DrawerHeader />
      <NavigationList
        items={items}
        currentPath={currentPath}
        onItemClick={onItemClick}
      />
    </Box>
  );
}; 