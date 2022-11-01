import React from 'react';
import { Grid, useTheme } from '@mui/material';

import MuiAlert from '@mui/material/Alert';

import { BasicSnakbar } from '../../components/BasicSnackbar/BasicSnakbar';
import { CommonButton } from '../../components/CommonButton/CommonButton';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Hosting = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  console.log(theme);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Grid item sx={{ p: 2, background: theme.palette.background.paper }}>
      <CommonButton variant="contained" onClick={handleClick} open={open}>
        Open success snackbar
      </CommonButton>
      <BasicSnakbar
        handleClose={handleClose}
        open={open}
        severity={'success'}
      />
    </Grid>
  );
};
