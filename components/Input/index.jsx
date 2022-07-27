import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    name, type, value, onChange, placehouder,
  } = props;

  return (
    <label htmlFor={name}>
      {name[0].toUpperCase() + name.substring(1)}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placehouder}
      />
    </label>
  );
}

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placehouder: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  onChange: '',
  placehouder: '',
};
