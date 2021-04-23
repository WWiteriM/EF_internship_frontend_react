import React, { useState } from 'react';
import styled from 'styled-components';
import login from '../../http/requests/login';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    color: black;
  `;

const LoginContainer = styled.div`
    padding: 20px;
    width: 80%;
    max-width: 500px;
    border: 1px solid #dedede;
    background-color: darkgrey;
    text-align: center;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  `;

export default function LoginForm() {
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
    const data = { email, password };
    await login(data);
  };

  return (
    <Wrapper>
      <LoginContainer>
        <form onSubmit={handleSubmit}>
          <p>EF-Network login:</p>
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
      </LoginContainer>
    </Wrapper>
  );
}
