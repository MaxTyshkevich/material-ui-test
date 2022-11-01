import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { dasboardTheme } from './dasboardTheme';
import { Authentication } from './pages/Authentication/Authentication.jsx';
import { Database } from './pages/Database/Database.jsx';
import { Functions } from './pages/Functions/Functions.jsx';
import { Hosting } from './pages/Hosting/Hosting.jsx';
import { MachineLearning } from './pages/Machine-learning/Machine-learning.jsx';
import { Storage } from './pages/Storage/Storage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={dasboardTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="authentication" element={<Authentication />} />
            <Route path="database" element={<Database />} />
            <Route path="storage" element={<Storage />} />
            <Route path="hosting" element={<Hosting />} />
            <Route path="functions" element={<Functions />} />
            <Route path="machine-learning" element={<MachineLearning />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
