import API from '../../baseURL';

const login = async (data) => {
  const token = await API.post('auth/login', data);
  await localStorage.setItem('accessToken', token.data.accessToken);
  await localStorage.setItem('refreshToken', token.data.refreshToken);
};

const registration = async (data) => {
  await API.post('auth/registration', data);
};

export { login, registration };
