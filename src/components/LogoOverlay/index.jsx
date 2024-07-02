import { styled } from '@mui/system';
import backgroundImage from '/assets/images/NoeliaLogo.png'; // Replace with your image path

const LogoOverlay = styled('div')({
  width: '200px', // Adjust width of the logo as needed
  height: '200px', // Adjust height of the logo as needed
  borderRadius: '50%', // Make the logo round
  overflow: 'hidden', // Ensure the image stays within the rounded border
  zIndex: 10, // Ensure the logo is above other content
  backgroundImage: `url(${backgroundImage})`, // Set the logo as the background image
  backgroundSize: 'cover', 
  backgroundPosition: 'center',
  boxShadow: '0px 8px 16px rgba(212, 163, 115, 0.5)',
});

export default LogoOverlay;
