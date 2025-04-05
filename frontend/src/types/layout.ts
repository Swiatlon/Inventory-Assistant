import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';

export interface MenuItem {
  text: string;
  icon: ReactNode;
  path: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface DrawerHeaderProps {
  title: string;
}

export interface NavigationItemProps {
  item: MenuItem;
  isSelected: boolean;
  onClick: () => void;
}

export interface NavigationListProps {
  items: MenuItem[];
  currentPath: string;
  onItemClick: (path: string) => void;
}

export interface AppBarProps {
  title: string;
  onMenuClick: () => void;
  isMobile: boolean;
}

export type SxStyles = SxProps<Theme>; 