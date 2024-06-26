import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CakeIcon from '@mui/icons-material/Cake';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EventIcon from '@mui/icons-material/Event';
import { styled } from '@mui/system';

const listItems = [
  { text: 'About', icon: <AccountCircleIcon /> },
  { text: 'Cakes', icon: <CakeIcon /> },
  { text: 'Cupcakes', icon: <CakeIcon /> },
  { text: 'Cheesecakes', icon: <CakeIcon /> }, // Example using CakeIcon again
  { text: 'Contact', icon: <ContactMailIcon /> },
];

const PageContainer = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  minWidth: '100vw',
  background: 'linear-gradient(to right, #FEFAE0 50%, #FAEDCD 50%)',
});

const ButtonContainer = styled('div')({
  position: 'fixed',
  top: '20px',
  right: '20px',
  zIndex: 999, // Ensures the button is above other content
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
          <ListItemButton>
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
    <PageContainer>
      <ButtonContainer>
        <Button onClick={toggleDrawer(true)}>Menu</Button>
      </ButtonContainer>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </PageContainer>
  );
}
