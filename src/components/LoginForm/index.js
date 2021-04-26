import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Wrapper, LoginContainer } from './style';
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
          <p>EF-Network login:</p>
          {errors.email && <p>{errors.email.message}</p>}
          <input
            {...register('email', { required: 'This is required' })}
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errors.password && <p>{errors.password.message}</p>}
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
