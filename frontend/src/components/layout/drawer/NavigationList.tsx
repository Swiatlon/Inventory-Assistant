import React from 'react';
import { List } from '@mui/material';
import { NavigationItems } from './NavigationItems';
import { MenuItem } from '../../../types/layout';

interface NavigationListProps {
  items: MenuItem[];
  currentPath: string;
  onItemClick: (path: string) => void;
}

export const NavigationList: React.FC<NavigationListProps> = ({
  items,
  currentPath,
  onItemClick,
}) => {
  return (
    <List
      component="nav"
      sx={{
        width: '100%',
        pt: 1,
        pb: 2,
      }}
    >
      <NavigationItems
        items={items}
        currentPath={currentPath}
        onItemClick={onItemClick}
      />
    </List>
  );
}; 