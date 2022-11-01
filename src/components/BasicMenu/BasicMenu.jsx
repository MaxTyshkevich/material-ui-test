import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const BasicMenu = ({ handleClose, anchorEl, open, menuItems }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      {menuItems.map((notification) => (
        <MenuItem onClick={handleClose} key={notification.label}>
          {notification.label}
        </MenuItem>
      ))}
    </Menu>
  );
};
