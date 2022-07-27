import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Icon from '../IconInput';
import profileInIcon from '../../images/userIn.svg';
import profileLeaveIcon from '../../images/userLeave.svg';
import searchWhiteIcon from '../../images/search-white.svg';
import searchBlackIcon from '../../images/search-black.svg';

function Header({ namePag }) {
  const onHeandleGoProfile = () => {
    console.log('profile');
  };

  return (
    <header className="header">
      <Icon
        alt="profile"
        src2={profileInIcon}
        src1={profileLeaveIcon}
        onClick={onHeandleGoProfile}
      />
      <h1>{namePag}</h1>
      <Icon
        alt="search"
        src1={searchWhiteIcon}
        src2={searchBlackIcon}
        onClick={onHeandleGoProfile}
      />

    </header>
  );
}

export default Header;

Header.propTypes = {
  namePag: PropTypes.string.isRequired,
};
