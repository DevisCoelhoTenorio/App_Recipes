import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

function Dashboard() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Dashboard;
