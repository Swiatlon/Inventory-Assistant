import { Drawer } from '@mui/material';
import { DrawerContent } from './DrawerContent';
import { menuItems } from '../Layout';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  currentPath: string;
  onItemClick: (path: string) => void;
  drawerWidth: number;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  onClose,
  currentPath,
  onItemClick,
  drawerWidth,
}) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          bgcolor: 'background.paper',
        },
      }}
    >
      <DrawerContent 
        items={menuItems}
        currentPath={currentPath} 
        onItemClick={onItemClick} 
      />
    </Drawer>
  );
}; 