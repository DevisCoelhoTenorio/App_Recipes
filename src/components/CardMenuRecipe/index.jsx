import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function CardMenuRecipe({ name, img }) {
  return (
    <div>
      <p>{name}</p>
      <img src={img} alt="foto da receita" />
    </div>
  );
}

export default CardMenuRecipe;

CardMenuRecipe.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
