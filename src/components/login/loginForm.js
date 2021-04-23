import React, { useState } from 'react';
import API from '../../http/baseURL';
import '../style.css';

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
    <div className="wrapper">
      <div className="loginContainer">
        <form onSubmit={handleSubmit}>
          <p>Login data:</p>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
