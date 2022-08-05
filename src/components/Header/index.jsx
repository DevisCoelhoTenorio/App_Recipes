import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import SearchBar from '../SearchBar';
import ProfileIcon from '../ProfileIcon';
import SearchIcon from '../SearchIcon';

function Header() {
  const [searchVisible, setSearchVisible] = useState(false);
  const { pathname } = useLocation();

  const onHandleSetSearchVisible = () => {
    setSearchVisible((prev) => !prev);
    console.log(pathname);
  };

  return (
    <header className="header">
      <div className="header-option">
        <ProfileIcon />
        <h1>namePag</h1>
        <SearchIcon
          onClick={onHandleSetSearchVisible}
        />
      </div>
      {searchVisible && <SearchBar />}
    </header>
  );
}

export default Header;
