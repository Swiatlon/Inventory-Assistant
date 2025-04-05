import React from 'react';
import { ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { MenuItem } from '../../../types/layout';

interface NavigationItemsProps {
  items: MenuItem[];
  currentPath: string;
  onItemClick: (path: string) => void;
}

export const NavigationItems: React.FC<NavigationItemsProps> = ({
  items,
  currentPath,
  onItemClick,
}) => {
  return (
    <>
      {items.map((item) => {
        const isSelected = currentPath === item.path;
        return (
          <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={isSelected}
              onClick={() => onItemClick(item.path)}
              sx={{
                borderRadius: 2,
                mx: 1,
                height: 44,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.2s ease-in-out',
                '&::before': isSelected ? {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 4,
                  borderRadius: '0 2px 2px 0',
                  bgcolor: 'primary.main',
                  transition: 'opacity 0.2s ease-in-out',
                } : {},
                '&.Mui-selected': {
                  bgcolor: 'action.selected',
                  '&:hover': {
                    bgcolor: 'action.selected',
                  },
                },
                '&:hover': {
                  bgcolor: 'action.hover',
                  '& .MuiListItemIcon-root': {
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: isSelected ? 'primary.main' : 'text.secondary',
                  transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontSize: '0.9375rem',
                    fontWeight: isSelected ? 600 : 400,
                    color: isSelected ? 'text.primary' : 'text.secondary',
                    transition: 'color 0.2s ease-in-out, font-weight 0.2s ease-in-out',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
}; 