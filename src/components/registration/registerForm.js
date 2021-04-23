import React, { useState } from 'react';
import styled from 'styled-components';
import registration from '../../http/requests/registration';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    color: black;
  `;

const RegisterContainer = styled.div`
    padding: 40px;
    width: 80%;
    max-width: 500px;
    border: 1px solid #dedede;
    background-color: darkgrey;
    text-align: center;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  `;

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeSurname = (event) => {
    setSurname(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email, password, name, surname,
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
            onChange={handleChangeName}
          />
          <input
            type="text"
            name="surname"
            placeholder="last name"
            onChange={handleChangeSurname}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChangeEmail}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChangePassword}
          />
          <button type="submit">Register</button>
        </form>
      </RegisterContainer>
    </Wrapper>
  );
}
