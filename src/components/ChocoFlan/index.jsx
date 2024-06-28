import React from 'react';
import { Container } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function ChocoFlan() {
  function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <Container
      sx={{
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Adding shadow
        padding: '24px',
        marginTop: '50px', // Adjust as needed
      }}
      maxWidth="lg" // Adjust max width as needed
    >
      <ImageList sx={{ width: '100%', height: '100%' }} cols={2} rowHeight={300} gap={24}>
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
 
];

export default ChocoFlan;
