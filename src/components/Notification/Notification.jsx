import React from 'react';
import { Badge, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';

import { BasicMenu } from '../BasicMenu/BasicMenu';

const menuItems = [
  { id: 0, label: 'first notification' },
  { id: 1, label: 'first notification' },
  { id: 2, label: 'first notification' },
];

export const Notification = ({ color }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const newNotification = `You have ${menuItems.length} new notification!`;
  const noNotification = `No new notification`;

  return (
    <div>
      <Tooltip title={menuItems.length ? newNotification : noNotification}>
        <IconButton
          aria-label="Notification"
          color={color}
          onClick={menuItems.length ? handleClick : null}
        >
          <Badge badgeContent={menuItems.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <BasicMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
        menuItems={menuItems}
      />
    </div>
  );
};
