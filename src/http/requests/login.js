import API from '../baseURL';

const login = async (data) => {
  const token = await API.post('auth/login', data);
  localStorage.setItem('accessToken', token.data.accessToken);
  localStorage.setItem('refreshToken', token.data.refreshToken);
};

export default login;
