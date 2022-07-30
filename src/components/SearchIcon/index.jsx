import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../UI/IconInput';
import searchWhiteIcon from '../../images/search-white.svg';
import searchBlackIcon from '../../images/search-black.svg';

function SearchIcon({ onClick }) {
  return (
    <Icon
      alt="search"
      src1={searchWhiteIcon}
      src2={searchBlackIcon}
      onClick={onClick}
    />
  );
}

export default SearchIcon;

SearchIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};
