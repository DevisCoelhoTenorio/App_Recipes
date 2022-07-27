import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import contextOfUser from '../../hooks/userContext';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function Login() {
  const [loginUser, setLoginUser] = useState(INITIAL_STATE);
  const { auth } = contextOfUser();
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
    <section>
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
        onClick={() => navigate('/newuser')}
        name="Criar Usuário"
      />
    </section>
  );
}

export default Login;
