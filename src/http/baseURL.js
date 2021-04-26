import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

export default axiosInstance;
// https://ef-soft.herokuapp.com/api/
// http://localhost:3001/api/
