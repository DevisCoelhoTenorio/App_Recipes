import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button';
import RegisterForm from '../../components/RegisterForm';

function NewUser() {
  const navigate = useNavigate();

  return (
    <div>
      <RegisterForm />
      <Button
        button
        onClick={() => navigate('/')}
        name="Voltar"
      />
    </div>
  );
}

export default NewUser;
