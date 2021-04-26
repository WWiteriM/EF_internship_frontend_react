import React, { useState } from 'react';
import { Wrapper, RegisterContainer } from './style';
import registration from '../../http/requests/registration';

function RegisterForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
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
        <form onSubmit={handleSubmit}>
          <p>Register person data:</p>
          <input
            type="text"
            name="name"
            placeholder="first name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            name="surname"
            placeholder="last name"
            onChange={(event) => setSurname(event.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            name="password"
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
