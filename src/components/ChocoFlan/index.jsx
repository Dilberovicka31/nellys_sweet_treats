import React from 'react';
import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';

function ChocoFlan() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <Container
      sx={{
        width: isSmallScreen ? '90%' : '70%', // Adjust width based on screen size
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Adding shadow
        padding: '24px',
        marginTop: '50px',
        marginBottom: '50px',
      }}
      maxWidth="lg" //Max Width
    >
      <Typography variant="h4" gutterBottom>
        Welcome to Our Choco Flan Collection
      </Typography>
      <Box
        width="100%"
        textAlign="center"
        mb={4}
        sx={{
          maxWidth: '100%',
          height: '500px',
          overflow: 'hidden',
          position: 'relative',
          borderRadius: '8px',
        }}
      >
        <video
          src="/assets/images/flan1.mp4"
          controls
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'none', // Adjusted to 'none' to prevent scaling
            maxWidth: '100%', // Ensures video doesn't exceed container width
            maxHeight: '100%', // Ensures video doesn't exceed container height
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Centering the video
          }}
        />
      </Box>

      <ImageList
        sx={{ width: '100%', height: '100%' }}
        cols={isSmallScreen ? 1 : 2} // Adjust columns based on screen size
        rowHeight={360}
        gap={24}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              {...srcset(item.img, 300, 300)}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton sx={{ color: 'white' }} aria-label={`star ${item.title}`}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

const itemData = [
  {
    img: '/assets/images/chocoflan1.jpeg',
    title: 'Chocolate Flan',
  },
  {
    img: '/assets/images/chocoflan2.jpeg',
    title: 'Chocolate Flan',
  },
  {
    img: '/assets/images/chocoflan3.jpeg',
    title: 'Chocolate Flan',
  },
  {
    img: '/assets/images/chocoflan4.jpeg',
    title: 'Chocolate Flan',
  },
  {
    img: '/assets/images/flan1.JPG',
    title: 'Chocolate Flan',
  },
  {
    img: '/assets/images/flan2.JPG',
    title: 'Chocolate Flan',
  }
];

export default ChocoFlan;
