import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import SearchBar from '../SearchBar';
import ProfileIcon from '../ProfileIcon';
import SearchIcon from '../SearchIcon';

function Header({ namePag }) {
  const [searchVisible, setSearchVisible] = useState(false);
  const onHandleSetSearchVisible = () => {
    setSearchVisible((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-option">
        <ProfileIcon />
        <h1>{namePag}</h1>
        <SearchIcon
          onClick={onHandleSetSearchVisible}
        />
      </div>
      {searchVisible && <SearchBar />}
    </header>
  );
}

export default Header;

Header.propTypes = {
  namePag: PropTypes.string.isRequired,
};
