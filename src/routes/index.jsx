import React, { useEffect } from 'react';
import {
  Routes, Route, Navigate, useLocation, useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../pages/Recipes';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

function PrivateRoute({ children, goToRoute }) {
  return localStorage.getItem('userlogged') ? children : <Navigate to={goToRoute} />;
}

function MainRoutes() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkedLogged = () => {
      if (pathname === '/login' && localStorage.getItem('userlogged')) {
        navigate('/');
      }
    };
    checkedLogged();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute goToRoute="login"><Home /></PrivateRoute>} />
      <Route path="login" element={<Login />} />
      <Route path="newuser" element={<Registration />} />
    </Routes>
  );
}

export default MainRoutes;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  goToRoute: PropTypes.string.isRequired,
};
