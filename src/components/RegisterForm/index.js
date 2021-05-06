import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { registration } from '../../http/requests/auth';
import TextInput from '../TextInput/index';
import {
  Wrapper, RegisterContainer,
} from './style';

const registerSchema = yup.object().shape({
  name: yup.string().trim().required(),
  surname: yup.string().trim().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(4).max(20),
});

function RegisterForm() {
  const history = useHistory();

  const { handleSubmit, formState: { errors }, register } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    await registration(data);
    await history.push('/login');
  };

  return (
    <Wrapper>
      <RegisterContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Register person data:</h1>
          <TextInput
            type="text"
            label="name"
            register={register}
            err={errors.name}
          />
          <TextInput
            type="text"
            label="surname"
            register={register}
            err={errors.surname}
          />
          <TextInput
            label="email"
            type="email"
            register={register}
            err={errors.email}
          />
          <TextInput
            label="password"
            type="password"
            register={register}
            err={errors.password}
          />
          <button type="submit">Register</button>
        </form>
      </RegisterContainer>
    </Wrapper>
  );
}

export default RegisterForm;
