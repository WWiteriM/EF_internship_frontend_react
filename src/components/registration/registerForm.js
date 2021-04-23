import React, { useState } from 'react';
import API from '../../http/baseURL';

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
    await API.post('auth/registration', {
      email, password, name, surname,
    });
  };

  return (
    <div className="wrapper">
      <div className="registerContainer">
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
      </div>
    </div>
  );
}
