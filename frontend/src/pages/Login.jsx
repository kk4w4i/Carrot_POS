import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { LoginForm } from './components/LoginForm';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login({ email, password });
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <LoginForm setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
