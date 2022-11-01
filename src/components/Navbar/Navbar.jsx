import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { mainNavbarItems } from './const/NavbarListItem';
import { navbarStyles as styles } from './style';
import { useParams, useNavigate } from 'react-router';

export const Navbar = () => {
  const param = useParams();
  const navigate = useNavigate();
  return (
    <Drawer sx={styles.drawer} variant="permanent" anchor="left">
      <Toolbar />
      <Divider />
      <List>
        {mainNavbarItems.map((item, index) => (
          <ListItem
            key={item.id}
            disablePadding
            onClick={() => navigate(item.route)}
          >
            <ListItemButton>
              <ListItemIcon sx={styles.icons}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={styles.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
