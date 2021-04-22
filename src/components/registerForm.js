import React from 'react';
import API from '../http/baseURL';

export default class RegisterForm extends React.Component {
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  }

  handleChangeSurname = (event) => {
    this.setState({ surname: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      email, password, name, surname,
    } = this.state;
    await API.post('auth/registration', {
      email, password, name, surname,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Person data:</p>
          <input type="text" name="name" placeholder="first name" onChange={this.handleChangeName} />
          <input type="text" name="surname" placeholder="last name" onChange={this.handleChangeSurname} />
          <input type="email" name="email" placeholder="email" onChange={this.handleChangeEmail} />
          <input type="password" name="password" placeholder="password" onChange={this.handleChangePassword} />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
