import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Wrapper, RegisterContainer } from './style';
import registration from '../../http/requests/registration';

function RegisterForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async () => {
    const data = {
      email,
      password,
      name,
      surname,
    };
    await registration(data);
  };

  return (
    <Wrapper>
      <RegisterContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Register person data:</p>
          {errors.name && <p>{errors.name.message}</p>}
          <input
            type="text"
            {...register('name', { required: 'This is required' })}
            value={name}
            placeholder="first name"
            onChange={(event) => setName(event.target.value)}
          />
          {errors.surname && <p>{errors.surname.message}</p>}
          <input
            type="text"
            {...register('surname', { required: 'This is required' })}
            value={surname}
            placeholder="last name"
            onChange={(event) => setSurname(event.target.value)}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type="email"
            {...register('email', { required: 'This is required' })}
            value={email}
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <input
            type="password"
            {...register('password', { required: 'This is required', minLength: { value: 4, message: 'Your password is too short' } })}
            value={password}
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </RegisterContainer>
    </Wrapper>
  );
}

export default RegisterForm;
