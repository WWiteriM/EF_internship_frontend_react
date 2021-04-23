import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import login from '../http/requests/login';

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

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState('Email must not be empty');
  const [passwordError, setPasswordError] = useState('Password must not be empty');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Incorrect email');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 20) {
      setPasswordError('Incorrect password');
      if (!e.target.value) {
        setPasswordError('Password must not be empty');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
    case 'email':
      setEmailDirty(true);
      break;
    case 'password':
      setPasswordDirty(true);
      break;
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = { email, password };
    await login(data);
  };

  return (
    <Wrapper>
      <LoginContainer>
        <form onSubmit={submitHandler}>
          <p>EF-Network login:</p>
          {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
          <input
            type="email"
            name="email"
            value={email}
            onBlur={(e) => { blurHandler(e); }}
            placeholder="email"
            onChange={(e) => { emailHandler(e); }}
          />
          {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
          <input
            type="password"
            name="password"
            value={password}
            onBlur={(e) => { blurHandler(e); }}
            placeholder="password"
            onChange={(e) => { passwordHandler(e); }}
          />
          <button disabled={!formValid} type="submit">Login</button>
        </form>
      </LoginContainer>
    </Wrapper>
  );
}
