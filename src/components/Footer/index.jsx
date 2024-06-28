import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://nellyssweettreats.com/">
        Nellys Sweet Treats
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '5vh', // Ensure the footer sticks to the bottom
        backgroundColor: '#E9EDC9', // Custom background color for the entire page
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Nellys Sweet Treats
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Discover our delicious choco flan, cheesecakes, and cakes.'}
          {' Indulge in sweetness with every bite!'}
        </Typography>
        <Typography variant="body1">Explore our mouthwatering treats.</Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#D4A373', // Custom background color for the footer
          color: '#ffffff', // Custom text color for the footer
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Stay updated with Nellys Sweet Treats for more delicious creations.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
