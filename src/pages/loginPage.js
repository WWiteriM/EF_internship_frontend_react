import React, { useState } from 'react';
import LoginForm from '../components/loginForm';

export default function Login() {
  const [token, setToken] = useState(null);

  console.log(token);

  return (
    <LoginForm setToken={setToken} />
  );
}
