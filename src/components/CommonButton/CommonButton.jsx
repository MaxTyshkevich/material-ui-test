import React from 'react';
import Button from '@mui/material/Button';

export const CommonButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};
