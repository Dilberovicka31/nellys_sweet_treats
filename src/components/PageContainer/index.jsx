import { styled } from '@mui/system';
// import LogoOverlay from '../LogoOverlay'; // Import LogoOverlay component
import backgroundImage from '/assets/images/NoeliaLogo.png'; // Replace with your image path

const PageContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  minHeight: '100vh',
  minWidth: '100vw',
  flexDirection: 'column',
  backgroundImage: `
    linear-gradient(to right, #FEFAE0 50%, #FAEDCD 50%)`, // Background gradient split
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundBlendMode: 'multiply',
  alignItems: 'center', // Center items vertically
  justifyContent: 'center', // Center items horizontally
  overflow: 'hidden', // Ensure content does not overflow
});

export default PageContainer;
