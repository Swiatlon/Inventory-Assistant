import { Drawer } from '@mui/material';
import { DrawerContent } from './DrawerContent';
import { menuItems } from '../Layout';

interface DesktopDrawerProps {
  currentPath: string;
  onItemClick: (path: string) => void;
  drawerWidth: number;
}

export const DesktopDrawer: React.FC<DesktopDrawerProps> = ({
  currentPath,
  onItemClick,
  drawerWidth,
}) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          bgcolor: 'background.paper',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        },
      }}
      open
    >
      <DrawerContent 
        items={menuItems}
        currentPath={currentPath} 
        onItemClick={onItemClick} 
      />
    </Drawer>
  );
}; 