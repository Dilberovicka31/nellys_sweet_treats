import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://nellyssweettreats.netlify.app/">
        Nellys Sweet Treats
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  // Style the icon container if needed
  const StyledIconContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '8px', // Adjust spacing between icons if needed
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '1vh', // Ensure the footer sticks to the bottom
        backgroundColor: '#E9EDC9', // Custom background color for the entire page
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2, textAlign: 'center' }} maxWidth="sm">
        <Typography variant="body1" component="p" gutterBottom style={{ color: '#6c584c' }}>
          Follow me on Social Media
        </Typography>
        <StyledIconContainer>
          <InstagramIcon style={{ fontSize: 40, color: '#6c584c' }} />
          <FacebookIcon style={{ fontSize: 40, color: '#6c584c' }} />
        </StyledIconContainer>
        <a
          href="https://www.instagram.com/nellys.sweet.treats?igsh=djg4Y3Y3aTY5cmk0"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#6c584c', textDecoration: 'none' }}
        >
          @nellys.sweet.treats
        </a>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#D4A373', // Custom background color for the footer
          color: '#7f5539', // Custom text color for the footer
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
