import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material/';
import { cardStyles } from './styles';

export const BasicCard = ({ header, content }) => {
  const theme = useTheme();
  console.log(theme);
  return (
    <Card sx={cardStyles}>
      {header}
      <CardContent>{content}</CardContent>
    </Card>
  );
};
