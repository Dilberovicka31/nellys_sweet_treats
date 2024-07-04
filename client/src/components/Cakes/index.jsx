import React, { useEffect } from 'react';
import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useSpring, animated } from '@react-spring/web'; // Import from react-spring

function Cake() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Animate the list items
  const [animate, setAnimate] = useSpring(() => ({
    transform: 'translateY(100px)', // Start off-screen
    opacity: 0,
  }));

  useEffect(() => {
    setAnimate({ transform: 'translateY(0)', opacity: 1, delay: 200 }); // Slide up animation
  }, [setAnimate]);

  function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <Container
      sx={{
        width: isSmallScreen ? '90%' : '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
        padding: '24px',
        marginTop: '50px',
        marginBottom: '50px',
      }}
      maxWidth="lg"
    >
      <Typography variant="h4" gutterBottom style={{ color: '#6c584c', paddingBottom:"20px" }}>
        Welcome to Our Cake Collection
      </Typography>
      
      <ImageList
        sx={{ width: '100%', height: '100%' }}
        cols={isSmallScreen ? 1 : 2}
        rowHeight={360}
        gap={24}
      >
        {itemData.map((item, index) => (
          <animated.div key={item.img} style={animate}>
            <ImageListItem
              sx={{
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow
                borderRadius: '8px', // Add rounded corners
                overflow: 'hidden', // Ensure overflow is hidden for rounded corners
              }}
            >
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
          </animated.div>
        ))}
      </ImageList>
    </Container>
  );
}

const itemData = [
  {
    img: '/assets/images/Cake.jpeg',
    title: 'Cake',
  },
  {
    img: '/assets/images/Cake1.jpeg',
    title: 'Cake',
  },
  {
    img: '/assets/images/Cake2.jpeg',
    title: 'Cake',
  },
];

export default Cake;
