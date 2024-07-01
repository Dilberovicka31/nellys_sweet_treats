
import { styled } from '@mui/system';
import backgroundImage from '/assets/images/NoeliaLogo.png';

const PageContainer = styled('div')({
  position: 'relative', // Ensure relative positioning for absolute children
  display: 'flex',
  minHeight: '100vh',
  minWidth: '100vw',
  flexDirection: 'column',
  backgroundImage: `linear-gradient(to right, #FEFAE0 50%, #FAEDCD 50%)`, // Background gradient
  backgroundSize: 'cover', // Adjust as needed (cover, contain, etc.)
  backgroundPosition: 'center', // Adjust as needed (center, top, left, etc.)
  backgroundBlendMode: 'multiply', // Example blend mode
});

const LogoOverlay = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px', // Set the maximum width
  height: '400px', // Set the maximum height
  borderRadius: '50%', // Make the logo round
  overflow: 'hidden', // Ensure the image stays within the rounded border
  zIndex: 10, // Ensure the logo is above the background and any overlay
  backgroundImage: `url(${backgroundImage})`, // Set the logo as the background image
  backgroundSize: 'cover', // Adjust as needed (cover, contain, etc.)
  backgroundPosition: 'center', // Adjust as needed (center, top, left, etc.)
});
export default PageContainer;
