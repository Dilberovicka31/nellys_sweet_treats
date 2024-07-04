import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CakeIcon from '@mui/icons-material/Cake';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const listItems = [
  { text: 'Home', icon: <AccountCircleIcon />, path: '/' },
  { text: 'Cakes', icon: <CakeIcon />, path: '/cakes' },
  { text: 'Chocoflan', icon: <CakeIcon />, path: '/chocoflan' },
  { text: 'Cheesecakes', icon: <CakeIcon />, path: '/cheesecakes' },
  { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
];

const ButtonContainer = styled('div')({
  position: 'fixed',
  top: '20px',
  right: '20px',
  zIndex: 999, 
  '& button': {
    backgroundColor: '#CCD5AE', // Default button color
    color:'#463f3a', // Text color
    '&:hover': {
      backgroundColor: '#E9EDC9', 
      boxShadow: '0px 8px 16px rgba(212, 163, 115, 0.8)', // Box shadow on hover
    },
    '&:focus': {
      outline: 'none', // Remove blue outline on focus
    },
    '& .MuiButton-startIcon': {
      marginRight: '8px', // Adjust the spacing between icon and text
    },
  },
});


  


const DrawerContent = styled('div')({
  width: 250,
  background: '#D4A373',
  height: '100%',
});

export default function RightDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (openState) => () => {
    setOpen(openState);
  };

  const list = (
    <DrawerContent
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {listItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </DrawerContent>
  );

  return (
    <div>
      <ButtonContainer>
        <Button startIcon={<MenuIcon/>} onClick={toggleDrawer(true)} style={{color:'#463f3a'}}>Menu</Button>
      </ButtonContainer>
      <Drawer style={{color:'#463f3a'}} anchor="right" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
}
