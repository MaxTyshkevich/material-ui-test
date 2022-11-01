import React from 'react';
import { CommonButton } from '../../components/CommonButton/CommonButton';
import { Notification } from '../../components/Notification/Notification';
import Avatar from '@mui/material/Avatar';
import { Typography, IconButton, Tooltip, Box } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

const headerStyles = {
  wrapper: {
    flex: 1,
    /* width: '100%', */
    backgroundColor: '#009be5',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },

  link: {
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover': {
      color: '#fff',
      cursor: 'pointer',
    },
  },

  topRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'center',
    marginBottom: '20px',
    gap: '5px',
  },
  middleRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px',
  },
  tittle: {
    flex: 1,
  },

  webButton: {
    marginRight: '5px',
  },
};

export const Header = ({ title }) => {
  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <CommonButton sx={headerStyles.link}>Go to docs</CommonButton>
        <Notification color="white" />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
      </Box>
      <Box sx={headerStyles.middleRow}>
        <Typography variant="h1" component="h1" sx={headerStyles.tittle}>
          {title}
        </Typography>

        <CommonButton variant="outlined" sx={headerStyles.webButton}>
          Web setup
        </CommonButton>
        <Tooltip title="Help">
          <IconButton color="white">
            <HelpIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
