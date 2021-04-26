import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Wrapper, LoginContainer, ErrorMessage } from './style';
import login from '../../http/requests/login';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async () => {
    const data = { email, password };
    await login(data);
  };

  return (
    <Wrapper>
      <LoginContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>EF-Network login:</h1>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          <input
            {...register('email', { required: 'This is required' })}
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          <input
            {...register('password', { required: 'This is required', minLength: { value: 4, message: 'Your password is too short' } })}
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">
            Login
          </button>
        </form>
      </LoginContainer>
    </Wrapper>
  );
}

export default LoginForm;
