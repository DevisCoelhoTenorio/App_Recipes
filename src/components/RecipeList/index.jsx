import React from 'react';
import PropTypes from 'prop-types';
import { useMainContext } from '../../hooks/useContext';
import CardMenuRecipe from '../CardMenuRecipe';

function RecipeList({ namePag }) {
  const { menuFood, menuDrink } = useMainContext();
  const selectList = namePag === 'Foods' ? menuFood : menuDrink;
  return (
    <div>
      {selectList.map((item) => (
        <CardMenuRecipe
          key={item.id}
          img={item.img}
          name={item.name}
        />
      ))}
    </div>

  );
}

export default RecipeList;

RecipeList.propTypes = {
  namePag: PropTypes.string.isRequired,
};
