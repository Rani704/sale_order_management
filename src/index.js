import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './contexts/ThemeContext';
import App from './App';
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
  <AuthProvider>
  <ThemeProvider>
  <App />
  </ThemeProvider>
  </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);

