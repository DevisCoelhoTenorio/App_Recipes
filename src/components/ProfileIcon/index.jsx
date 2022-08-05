import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../UI/IconInput';
import profileInIcon from '../../images/userIn.svg';
import profileLeaveIcon from '../../images/userLeave.svg';

function ProfileIcon() {
  const navigate = useNavigate();

  const onHeandleGoProfile = () => {
    navigate('/profile');
  };

  return (
    <Icon
      alt="profile"
      src2={profileInIcon}
      src1={profileLeaveIcon}
      onClick={onHeandleGoProfile}
    />
  );
}

export default ProfileIcon;
