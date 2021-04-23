import API from '../baseURL';

const registration = async (data) => {
  await API.post('auth/registration', data);
};

export default registration;
