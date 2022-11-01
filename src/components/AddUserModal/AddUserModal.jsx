import React, { useEffect, useState } from 'react';
import { BasicModal } from '../BasicModal/BasicModal';
import { Typography, Box, TextField } from '@mui/material';

import { styles } from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

const defaultInputValues = {
  userId: '',
  email: '',
  phoneNumber: '',
};

export const AddUserModal = ({ open, handleClose, createUser, ...props }) => {
  const [values, setValues] = useState(defaultInputValues);

  useEffect(() => {
    if (open) {
      setValues(defaultInputValues);
    }
  }, [open]);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    userId: Yup.string()
      .required('User ID is required')
      .min(6, 'User ID must be at least 6 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid.'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(validationSchema) });

  const onSubmit = handleSubmit(createUser);

  const onChangeInputs = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const title = 'Add user';

  const getContent = () => (
    <Box sx={styles.wrapperInputs}>
      <TextField
        sx={{
          '& .MuiFormHelperText-root': {
            top: '100%',
            position: 'absolute',
          },
        }}
        {...register('userId')}
        onChange={onChangeInputs}
        value={values.userId}
        label="User ID"
        placeholder="User ID!"
        variant="outlined"
        required
        error={errors.userId ? true : false}
        helperText={errors.userId?.message}
      />

      <TextField
        sx={{
          '& .MuiFormHelperText-root': {
            top: '100%',
            position: 'absolute',
          },
        }}
        {...register('email')}
        onChange={onChangeInputs}
        value={values.email}
        label="Email"
        placeholder="Email!"
        variant="outlined"
        error={errors.email ? true : false}
        helperText={errors.email?.message}
        required
      />
      <TextField
        sx={{
          '& .MuiFormHelperText-root': {
            top: '100%',
            position: 'absolute',
          },
        }}
        {...register('phoneNumber')}
        onChange={onChangeInputs}
        value={values.phoneNumber}
        label="Phone Number"
        placeholder="Phone Number!"
        variant="outlined"
        error={errors.phoneNumber ? true : false}
        required
        helperText={errors.phoneNumber?.message}
      />
    </Box>
  );

  return (
    <BasicModal
      title={title}
      body={getContent()}
      open={open}
      handleClose={handleClose}
      handleSubmit={onSubmit}
      {...props}
    />
  );
};
