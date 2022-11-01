import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CommonButton } from '../CommonButton/CommonButton';
import Paper from '@mui/material/Paper';

const styles = {
  modalWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },

  buttonsGroups: {
    display: 'flex',
    gap: 2,
  },
};

export const BasicModal = ({
  open,
  handleClose,
  handleSubmit,
  title,
  body,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalWrapper}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Paper id="modal-modal-description" sx={{ my: 2 }}>
          {body}
        </Paper>
        <Box sx={styles.buttonsGroups}>
          <CommonButton onClick={handleSubmit} variant="contained">
            Submit
          </CommonButton>
          <CommonButton onClick={handleClose}>Cancel</CommonButton>
        </Box>
      </Box>
    </Modal>
  );
};
