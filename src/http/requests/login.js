import API from '../baseURL';

const login = async (data) => {
  const token = await API.post('auth/login', data);
  localStorage.setItem('token', token.data);
};

export default login;
