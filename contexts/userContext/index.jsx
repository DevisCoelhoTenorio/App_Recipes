import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

export const contextUser = createContext();

function UserProvider({ children }) {
  const [userList, setUserList] = useLocalStorage('userList', []);
  const [userLogged, setUserLogged] = useState('');
  const navigate = useNavigate();

  const auth = (email, password) => {
    const stateAuth = userList.some((user) => user.email === email && user.password === password);
    if (stateAuth) {
      localStorage.setItem('userlogged', email);
      setUserLogged(email);
      return navigate('/');
    }
    return global.alert('Unregistered user');
  };

  const registerUser = ({ name, email, password }) => {
    const REGEX_RULE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/img;
    const CHARACTERS_MIN = 3;
    const LENGTH_MIN_PASS = 6;
    if (
      REGEX_RULE.test(email)
      && name.length > CHARACTERS_MIN
      && password.length >= LENGTH_MIN_PASS) {
      setUserList([...userList, { name, email, password }]);
    } else {
      global.alert('Incorrect fill format');
    }
  };

  const valuerProvider = useMemo(() => ({
    userList,
    setUserList,
    userLogged,
    auth,
    registerUser,
  }), []);

  return (
    <contextUser.Provider value={valuerProvider}>
      {children}
    </contextUser.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
