import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer />
    </BrowserRouter>
  );
}
