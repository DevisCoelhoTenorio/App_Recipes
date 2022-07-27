import React from 'react';
import './App.css';
import UserProvider from './contexts/userContext';
import MainRoutes from './routes';

function App() {
  return (
    <UserProvider>
      <MainRoutes />
    </UserProvider>
  );
}

export default App;
