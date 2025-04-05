import { FC } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, IconButton } from '@mui/material';
import { Add as AddIcon, Edit as EditIcon } from '@mui/icons-material';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onAddToList?: () => void;
  onEdit?: () => void;
}

export const ProductCard: FC<ProductCardProps> = ({ product, onAddToList, onEdit }) => {
  const { name, description, price, category, unit, image, tags } = product;

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => `0 8px 24px ${theme.palette.mode === 'dark' 
            ? 'rgba(0,0,0,0.3)' 
            : 'rgba(0,0,0,0.1)'}`
        }
      }}
    >
      {image && (
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 8, 
          right: 8,
          display: 'flex',
          gap: 1
        }}
      >
        {onEdit && (
          <IconButton 
            size="small" 
            onClick={onEdit}
            sx={{ 
              bgcolor: 'background.paper',
              '&:hover': { bgcolor: 'background.default' }
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        )}
        {onAddToList && (
          <IconButton 
            size="small" 
            onClick={onAddToList}
            sx={{ 
              bgcolor: 'background.paper',
              '&:hover': { bgcolor: 'background.default' }
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, pt: 2 }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="h2"
          sx={{ 
            fontSize: '1.1rem',
            fontWeight: 600,
            mb: 0.5
          }}
        >
          {name}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            height: '40px'
          }}
        >
          {description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
          <Typography 
            variant="h6" 
            color="primary"
            sx={{ 
              fontWeight: 600,
              fontSize: '1.1rem'
            }}
          >
            ${price.toFixed(2)}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              display: 'flex',
              alignItems: 'center'
            }}
          >
            per {unit}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          <Chip 
            label={category}
            size="small"
            sx={{ 
              bgcolor: (theme) => theme.palette.mode === 'dark' 
                ? 'rgba(255,255,255,0.1)' 
                : 'rgba(0,0,0,0.08)'
            }}
          />
          {tags?.slice(0, 2).map((tag) => (
            <Chip 
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ 
                borderColor: (theme) => theme.palette.mode === 'dark' 
                  ? 'rgba(255,255,255,0.1)' 
                  : 'rgba(0,0,0,0.08)'
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}; 