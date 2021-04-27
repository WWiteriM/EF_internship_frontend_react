import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import login from '../../http/requests/login';
import TextInput from '../TextInput/index';
import {
  Wrapper, LoginContainer,
} from './style';

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
});

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    await login(data);
  };

  return (
    <Wrapper>
      <LoginContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>EF-Network login:</h1>
          <TextInput
            register={register}
            type="email"
            label="email"
            err={errors.email}
          />
          <TextInput
            register={register}
            type="password"
            label="password"
            err={errors.password}
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
