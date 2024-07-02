import { styled } from '@mui/system';
import backgroundImage from '/assets/images/NoeliaLogo.png'; // Replace with your image path

const LogoOverlay = styled('div')({
  width: '400px', // Maximum width for the logo
  height: '400px', // Maximum height for the logo
  borderRadius: '50%', // Make the logo round
  overflow: 'hidden', // Ensure the image stays within the rounded border
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 10, // Ensure the logo is above the background
  backgroundImage: `url(${backgroundImage})`, // Set the logo as the background image
  backgroundSize: 'cover', // Adjust as needed (cover, contain, etc.)
  backgroundPosition: 'center', // Adjust as needed (center, top, left, etc.)
});

export default LogoOverlay;
