import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CakeIcon from '@mui/icons-material/Cake';
// import CheesecakeIcon from '@mui/icons-material/Cheesecake';
// import CupcakeIcon from '@mui/icons-material/Cupcake';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function NavBar() {
    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Cakes', 'Cheesecakes', 'Cupcakes', 'Contact'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {text === 'Cakes' && <CakeIcon />}
                    {text === 'Cheesecakes' }
                    {text === 'Cupcakes' }
                    {text === 'Contact' && <ContactMailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
      return (
        <div>
          <Button onClick={toggleDrawer('right', true)} style={{ position: 'absolute', top: 0, right: 0 }}>
            Right
          </Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </div>
      );
}

export default NavBar;
