import React from 'react';
import API from '../http/baseURL';

export default class LoginForm extends React.Component {
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const token = await API.post('auth/login', { email, password });
    console.log(token.data);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Person data:</p>
          <input type="email" name="email" placeholder="email" onChange={this.handleChangeEmail} />
          <input type="password" name="password" placeholder="password" onChange={this.handleChangePassword} />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
