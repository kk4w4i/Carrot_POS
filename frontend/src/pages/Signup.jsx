import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { SignupForm } from './components/SignupForm';

const Signup = () => {
  const [businessName, setBusinessName] = useState('');
  const [slug, setSlug] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ businessName, slug, email, password }),
        credentials: 'include', // Include cookies in the request
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      } 
      // Use the login method from AuthContext to set the token
      login({ email, password });
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <SignupForm 
        setBusinessName={setBusinessName}
        setSlug={setSlug}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Signup;