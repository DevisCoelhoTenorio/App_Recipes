import React, { useEffect } from 'react';
import {
  Routes, Route, Navigate, useLocation, useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Recipes from '../pages/Recipes';
import RecipeDetails from '../pages/RecipesDetails';
import RecipesInProgress from '../pages/RecipesInProgress';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

function PrivateRoute({ Component }) {
  return localStorage.getItem('userlogged') ? <Component /> : <Navigate to="/" />;
}

function MainRoutes() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkedLogged = () => {
      if (pathname === '/' && localStorage.getItem('userlogged')) {
        navigate('/foods');
      }
    };
    checkedLogged();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="newuser" element={<Registration />} />

      <Route path="foods" element={<PrivateRoute Component={Recipes} />} />
      <Route path="foods/:id" element={<PrivateRoute Component={RecipeDetails} />} />
      <Route path="foods/:id/in-progress" element={<PrivateRoute Component={RecipesInProgress} />} />

      <Route path="drinks" element={<PrivateRoute Component={Recipes} />} />
      <Route path="drinks/:id" element={<PrivateRoute Component={RecipeDetails} />} />
      <Route path="drinks/:id/in-progress" element={<PrivateRoute Component={RecipesInProgress} />} />

      <Route path="recipes/done-recipes" element={<PrivateRoute Component={DoneRecipes} />} />
      <Route path="recipes/favorite-recipes" element={<PrivateRoute Component={FavoriteRecipes} />} />
      <Route path="profile" element={<PrivateRoute Component={Profile} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MainRoutes;

PrivateRoute.propTypes = {
  Component: PropTypes.func.isRequired,
};
