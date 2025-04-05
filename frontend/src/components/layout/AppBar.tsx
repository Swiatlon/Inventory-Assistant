import { AppBar as MuiAppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBarProps } from '../../types/layout';

const DRAWER_WIDTH = 300;

export const AppBar: React.FC<AppBarProps> = ({ title, onMenuClick, isMobile }) => {
  return (
    <MuiAppBar 
      position="fixed" 
      sx={{
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { sm: `${DRAWER_WIDTH}px` },
        bgcolor: 'white',
        color: 'text.primary',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography 
          variant="h6" 
          noWrap 
          component="div" 
          sx={{ fontWeight: 500 }}
        >
          {title}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}; 