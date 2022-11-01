import CssBaseline from '@mui/material/CssBaseline';

import { Navbar } from './components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import { Header } from './components/Header/Header';

import '@fontsource/roboto/';

import Grid from '@mui/material/Grid';
const App = () => {
  const { pathname } = useLocation();
  const title = pathname.replace(/\W/g, '');
  return (
    <Grid container>
      <CssBaseline />
      <Navbar />

      <Grid container item sx={{ flex: 1 }} direction="column">
        <Header title={title} />
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default App;
