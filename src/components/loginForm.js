import React, { useState } from 'react';
import API from '../http/baseURL';

export default function LoginForm(props) {
  const { setToken } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await API.post('auth/login', { email, password });
    setToken(token.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Person data:</p>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleChangePassword}
      />
      <button type="submit">Add</button>
    </form>
  );
}
