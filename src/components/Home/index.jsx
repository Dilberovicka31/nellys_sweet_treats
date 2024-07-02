import React from 'react';
import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import backgroundImage from '/assets/images/NoeliaLogo.png'; // Replace with your image path

function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Define animations for sliding in from left and fade in for logo
  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 },
  });

  const logoAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <>
      <Container
        sx={{
          position: 'relative',
          mt: 4,
          mb: 2,
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          alignItems: isSmallScreen ? 'center' : 'flex-start',
          justifyContent: isSmallScreen ? 'center' : 'flex-start',
        }}
        maxWidth="sm"
      >
        {!isSmallScreen && (
          <animated.div style={{ ...textAnimation, width: '70%', textAlign: 'left', paddingRight: '20px' }}>
            <div>
              <Typography variant="h2" component="h1" gutterBottom style={{ color: '#6c584c' }}>
                Welcome to Nellys Sweet Treats
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom style={{ color: '#6c584c' }}>
                Discover our delicious choco flan, cheesecakes, and cakes. Indulge in sweetness with every bite!
              </Typography>
              <Typography variant="body1" style={{ color: '#6c584c' }}>
                Explore our mouthwatering treats.
              </Typography>
            </div>
          </animated.div>
        )}
        <animated.img
          src={backgroundImage}
          alt="Logo"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0px 8px 16px rgba(212, 163, 115, 0.5)',
            marginBottom: isSmallScreen ? '20px' : '0',
            alignSelf: isSmallScreen ? 'center' : 'flex-start',
            order: isSmallScreen ? -1 : 0, // Place logo before text on small screens
            ...logoAnimation, // Apply fade-in animation
          }}
        />
        {isSmallScreen && (
          <animated.div style={{ ...textAnimation, width: '70%', textAlign: 'left', paddingRight: '20px' }}>
            <div>
              <Typography variant="h2" component="h1" gutterBottom style={{ color: '#6c584c' }}>
                Welcome to Nellys Sweet Treats
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom style={{ color: '#6c584c' }}>
                Discover our delicious choco flan, cheesecakes, and cakes. Indulge in sweetness with every bite!
              </Typography>
              <Typography variant="body1" style={{ color: '#6c584c' }}>
                Explore our mouthwatering treats.
              </Typography>
            </div>
          </animated.div>
        )}
      </Container>
     {/* Render ScrollArrow component */}
    </>
  );
}

export default Home;
