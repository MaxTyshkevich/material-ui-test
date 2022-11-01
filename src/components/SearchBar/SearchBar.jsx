import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/material';
import Box from '@mui/material/Box';

export const SearchBar = ({ onChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        gap: 1.2,
      }}
    >
      <SearchIcon />
      <Input
        placeholder="Search by email address, phone number, or user UID"
        onChange={onChange}
        fullWidth
        disableUnderline
      />
    </Box>
  );
};
