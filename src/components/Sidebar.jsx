import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';

const Sidebar = ({ open, toggleSidebar }) => (
  <Drawer
    anchor="left"
    open={open}
    onClose={toggleSidebar}
    sx={{
      width: 240,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
      },
    }}
  >
    <List>
      <ListItem button component={Link} to="/" onClick={toggleSidebar}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/faq" onClick={toggleSidebar}>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="FAQ Page" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
