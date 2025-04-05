import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import {
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
  Inventory as InventoryIcon,
  Settings as SettingsIcon,
  Inventory2 as Inventory2Icon,
} from '@mui/icons-material';
import { LayoutProps, MenuItem } from '../../types/layout';
import { AppBar } from './AppBar';
import { MobileDrawer, DesktopDrawer } from './drawer';

const DRAWER_WIDTH = 300;

export const menuItems: MenuItem[] = [
  {
    text: 'Home',
    path: '/',
    icon: <HomeIcon />
  },
  {
    text: 'Products',
    path: '/products',
    icon: <Inventory2Icon />
  },
  {
    text: 'Inventory',
    path: '/inventory',
    icon: <InventoryIcon />
  },
  {
    text: 'Shopping List',
    path: '/shopping-list',
    icon: <ShoppingCartIcon />
  },
  {
    text: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />
  }
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    
    if (isMobile) {
      setIsMobileOpen(false);
    }
  };

  const currentTitle = menuItems.find((item) => item.path === router.pathname)?.text || 'Inventory Assistant';

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        title={currentTitle}
        onMenuClick={handleDrawerToggle}
        isMobile={isMobile}
      />
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
      >
        <MobileDrawer
          open={isMobileOpen}
          onClose={handleDrawerToggle}
          currentPath={router.pathname}
          onItemClick={handleNavigation}
          drawerWidth={DRAWER_WIDTH}
        />
        <DesktopDrawer
          currentPath={router.pathname}
          onItemClick={handleNavigation}
          drawerWidth={DRAWER_WIDTH}
        />
      </Box>
      <Box 
        component="main" 
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          mt: '64px',
          bgcolor: 'background.default',
          minHeight: 'calc(100vh - 64px)'
        }}
      >
        {children}
      </Box>
    </Box>
  );
}; 