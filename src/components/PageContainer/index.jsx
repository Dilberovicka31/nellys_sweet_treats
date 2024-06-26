import { styled } from '@mui/system';
import backgroundImage from '../../assets/Logo.png'; // Replace with your image path

const PageContainer = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  minWidth: '100vw',
  flexDirection: 'column',
  backgroundImage: `url(${backgroundImage})`, // Set background image
  backgroundSize: 'cover', // Adjust as needed (cover, contain, etc.)
  backgroundPosition: 'center', // Adjust as needed (center, top, left, etc.)
  backgroundBlendMode: 'multiply', // Example blend mode
  background: 'linear-gradient(to right, #FEFAE0 50%, #FAEDCD 50%)', // Fallback background color
});

export default PageContainer;
