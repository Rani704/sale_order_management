import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { ThemeContext } from './contexts/ThemeContext';
import LoginPage from './components/LoginPage';
import SaleOrders from './components/SaleOrder';
import './App.css';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={isDarkTheme ? 'app dark-theme' : 'app'}>
      <Router>
         <Routes>
          <Route path="/login">
            <LoginPage />
          </Route>
          {isAuthenticated && (
            <Route path="/">
              <SaleOrders />
            </Route>
          )}
        </Routes>
      </Router>
      {isAuthenticated && (
        <button onClick={toggleTheme}>
          {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </button>
      )}
    </div>
  );
};

export default App;
