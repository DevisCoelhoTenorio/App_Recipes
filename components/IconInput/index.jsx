import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
  const [state, setState] = useState(false);
  const {
    alt,
    src1,
    src2,
    onClick,
  } = props;

  const onHeandleClick = () => {
    onClick();
    setState((prev) => !prev);
  };

  return (
    <input
      type="image"
      src={state ? src1 : src2}
      alt={alt}
      onClick={onHeandleClick}
    />
  );
}

export default Icon;

Icon.propTypes = {
  alt: PropTypes.string.isRequired,
  src1: PropTypes.string.isRequired,
  src2: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
