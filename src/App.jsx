import React from 'react';
import './App.css';
import AuthProvider from './contexts/AuthContext';
import MainProvider from './contexts/MainContext';
import MainRoutes from './routes';

function App() {
  return (
    <MainProvider>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </MainProvider>
  );
}

export default App;
