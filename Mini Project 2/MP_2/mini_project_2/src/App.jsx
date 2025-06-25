import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/navBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes/NavRoutes';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
     <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
