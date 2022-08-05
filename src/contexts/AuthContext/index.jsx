import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userList, setUserList] = useLocalStorage('userList', []);
  const [userLogged, setUserLogged] = useState(localStorage.getItem('userlogged') || '');
  const navigate = useNavigate();

  const auth = (email, password) => {
    const stateAuth = userList.some((user) => user.email === email && user.password === password);
    if (stateAuth) {
      localStorage.setItem('userlogged', email);
      setUserLogged(email);
      return navigate('/foods');
    }
    return global.alert('Unregistered user');
  };

  const registerUser = ({ name, email, password }) => {
    const REGEX_RULE_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/img;
    const REGEX_RULE_PASSWORD = /^[a-zA-Z0-9]{6,}$/;
    const REGEX_RULE_NAME = /^[a-zA-Z0-9]{3,}$/;
    if (
      REGEX_RULE_EMAIL.test(email)
      && REGEX_RULE_NAME.test(name)
      && REGEX_RULE_PASSWORD.test(password)) {
      setUserList([...userList, { name, email, password }]);
      navigate('/');
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
    <AuthContext.Provider value={valuerProvider}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
