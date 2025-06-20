import React from 'react';
import AppRoutes from './routes/AppRoutes';
import ButtonAppBar from './components/NavBar';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ButtonAppBar />
      <div style={{ padding: '2rem' }}>
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
