import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useAuthContext } from '../../hooks/useContext';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

function RegisterForm() {
  const [stateRegister, setStateRegister] = useState(INITIAL_STATE);
  const { registerUser } = useAuthContext();

  const onHandleChange = ({ target: { value, name } }) => {
    setStateRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onHandleRegisterUser = () => {
    registerUser(stateRegister);
  };

  const { name, email, password } = stateRegister;
  return (
    <form>
      <Input
        name="name"
        type="text"
        value={name}
        onChange={onHandleChange}
        placehouder="Digite seu Nome"
      />
      <Input
        name="email"
        type="email"
        value={email}
        onChange={onHandleChange}
        placehouder="Digite seu Email"
      />
      <Input
        name="password"
        type="password"
        value={password}
        onChange={onHandleChange}
        placehouder="Digite seu password"
      />
      <Button
        button
        onClick={onHandleRegisterUser}
        name="Cadastrar"
      />
    </form>
  );
}

export default RegisterForm;
