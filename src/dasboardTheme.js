import { createTheme } from '@mui/material/styles';

export const dasboardTheme = createTheme({
  palette: {
    white: {
      main: '#fff',
    },
  },

  typography: {
    h1: {
      fontSize: '1.6rem',
      fontWeight: 600,
      color: '#fff',
      letterSpacing: '0.5px',
      textTransform: 'capitalize',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 500,
          borderRadius: 8,
          textTransform: 'capitalize',
          whiteSpace: 'nowrap',
        },
        contained: {
          backgroundColor: '#009be5',
          '&:hover': {
            backgroundColor: '#006db3',
          },
        },
        outlined: {
          color: 'white',
          borderColor: 'rgba(255, 255, 255, 0.7)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            borderColor: 'inherit',
          },
        },
      },
    },
  },
});
