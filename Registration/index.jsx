import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import contextOfUser from '../../hooks/userContext';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

function NewUser() {
  const [stateRegister, setStateRegister] = useState(INITIAL_STATE);
  const { registerUser } = contextOfUser();

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

export default NewUser;
