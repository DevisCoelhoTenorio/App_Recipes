import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useAuthContext } from '../../hooks/useContext';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function LoginForm() {
  const [loginUser, setLoginUser] = useState(INITIAL_STATE);
  const { auth } = useAuthContext();
  const navigate = useNavigate();

  const onHandleChange = ({ target: { name, value } }) => {
    setLoginUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onHandleAuth = () => {
    const { email, password } = loginUser;
    auth(email, password);
  };

  return (
    <form>
      <Input
        name="email"
        type="email"
        value={loginUser.email}
        onChange={onHandleChange}
        placehouder="Email de Login"
      />
      <Input
        name="password"
        type="password"
        value={loginUser.password}
        onChange={onHandleChange}
        placehouder="Password"
      />
      <Button
        button
        onClick={onHandleAuth}
        name="Login"
      />
      <Button
        button
        onClick={() => navigate('newuser')}
        name="Criar Usuário"
      />
    </form>
  );
}

export default LoginForm;
