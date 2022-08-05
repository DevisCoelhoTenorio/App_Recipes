import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { button, onClick, name } = props;
  return (
    <button
      type={button ? 'button' : 'submit'}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  button: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
