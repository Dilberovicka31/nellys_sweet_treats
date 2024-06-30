import { styled } from '@mui/system';
import backgroundImage from '/assets/images/NoeliaLogo.png'; 

const PageContainer = styled('div')({
  position: 'relative', // Ensure relative positioning for absolute children
  display: 'flex',
  minHeight: '100vh',
  minWidth: '100vw',
  flexDirection: 'column',
  backgroundImage: `url(${backgroundImage})`, // Set background image
  backgroundSize: 'cover',
  backgroundPosition: 'center', 
  backgroundBlendMode: 'multiply', // Example blend mode
  background: 'linear-gradient(to right, #FEFAE0 50%, #FAEDCD 50%)', // Fallback background color
});

const CenteredLogo = styled('img')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', // Center the logo horizontally and vertically
  zIndex: 10, // Ensure the logo is above the background and any overlay
  width: '400px',
  height: 'auto', 
  borderRadius: '50%',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
});

const LogoOverlayPage = () => {
  return (
    <PageContainer>
      <CenteredLogo src="/assets/images/NoeliaLogo.png" alt="Logo" />
      {/* Other content inside PageContainer */}
    </PageContainer>
  );
};

export default LogoOverlayPage;
