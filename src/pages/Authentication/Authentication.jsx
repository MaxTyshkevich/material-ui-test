import { Grid, Box, Typography } from '@mui/material';
import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

import { BasicCard } from '../../components/BasicCard/BasicCard';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { CommonButton } from '../../components/CommonButton/CommonButton';
import IconButton from '@mui/material/IconButton';
import { cardHeaderStyles } from './styles';
import { AddUserModal } from '../../components/AddUserModal/AddUserModal';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect } from 'react';

export const Authentication = () => {
  const [inputSearch, setInputSearch] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const [users, setUsers] = React.useState([
    { userId: '122332423', email: 'scofiald@mail.ru', phoneNumber: '23423423' },
  ]);
  const [showUsers, setShowUsers] = React.useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  console.log('users: ', users);

  const getHeader = () => {
    const handleChange = (value) => {
      setInputSearch(value);
    };

    const addUser = () => {
      handleOpen();
    };

    const createUser = (addUser) => {
      setUsers([...users, addUser]);
      setOpen(false);
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          value={inputSearch}
          onChange={(event) => handleChange(event.target.value)}
          fullWidth
        />

        {/* Open window  !*/}
        <CommonButton
          sx={cardHeaderStyles.addUserButton}
          variant="contained"
          size="large"
          onClick={addUser}
        >
          Add user
        </CommonButton>

        <AddUserModal
          open={open}
          handleClose={handleClose}
          createUser={createUser}
        />
        {/* Open window  */}

        <IconButton>
          <RefreshIcon />
        </IconButton>
      </Box>
    );
  };

  const getContent = () => {
    return !users.length ? (
      <Typography
        align="center"
        sx={{
          margin: '40px 16px',
          color: 'rgba(0, 0, 0, 0.6)',
          fontSize: '1.3rem',
        }}
      >
        No users for this project yet
      </Typography>
    ) : (
      <List>
        {showUsers.map((user, index) => (
          <ListItem sx={{ columnGap: '10px' }} key={index}>
            <ListItemAvatar>
              <Avatar sx={{ width: '50px', height: '50px' }}>
                <AccountCircleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ padding: '8px 15px' }}
              primary={<Typography>ID: {user.userId}</Typography>}
              secondary={
                <>
                  <Typography
                    component={'span'}
                    variant={'body1'}
                    sx={{ display: 'block' }}
                  >
                    email: {user.email}
                  </Typography>
                  <Typography
                    component={'span'}
                    variant={'body1'}
                    sx={{ display: 'block' }}
                  >
                    phoneNumber: {user.phoneNumber}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    );
  };

  useEffect(() => {
    if (inputSearch) {
      const filterUsers = users.filter((user) => {
        const result = Object.values(user).some((value) =>
          value.toLowerCase().includes(inputSearch.toLowerCase())
        );
        return result;
      });
      setShowUsers(filterUsers);
    } else {
      setShowUsers(users);
    }
  }, [inputSearch, users]);

  return (
    <Grid
      item
      sx={{
        minHeight: 'calc(100vh - 160px)',
        backgroundColor: '#eaeff1',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <BasicCard header={getHeader()} content={getContent()} />
    </Grid>
  );
};
